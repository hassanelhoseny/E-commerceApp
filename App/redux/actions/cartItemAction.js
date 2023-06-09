import * as ActionTypes from  './ActionTypes' ;
import axios from 'axios';
import {totalSelector} from '../selector/cartSelectors';




export const setCartItem = cartItems =>  ({
    type: ActionTypes.GET_CART_ITEMS , 
    payload: {cartItems}
})


export const fetchCartItems = () => {

    return(dispatch , getState) =>{ 

        axios.get('cart').then(

            res=>{
         const cartItems = res.data.items ;

        dispatch(setCartItem(cartItems))
            }
        ) 

    }
}

const makeOrderSucess = ()=> ({type: ActionTypes.SUCCESS_ORDER}) ;

export const makeOrder = () => {
    return (dispatch, getState) => {
      const selectedAddressId = getState().auth.selectedAddressId;
      const items = getState().cart.cartItems.map(item => item._id);
      const total = totalSelector(getState());
  
      axios.post('/order', {
        paymenMethod: 1,
        items,
        shippingAddress: selectedAddressId,
        totalCost: total,
      }).then(dispatch(makeOrderSucess()));
    };
  };


  const setAddingProductToCart = productId => ({
    type: ActionTypes.SET_ADDING_PRODUCT_TO_CART,
    payload: {productId},
  });
  const addProductToCartError = erorCode => ({
    type: ActionTypes.ADD_PRODUCT_TOCART_ERROR,
    payload: {erorCode},
  });

  const clearAddingProductToCart = productId => ({
    type: ActionTypes.CLEAR_ADDING_PRODUCT_TO_CART,
    payload: {productId},
  });

const signInStart = () => ({type: ActionTypes.SIGNIN_START }) ;

const signInSuccess = () => ({type: ActionTypes.SIGNIN_SUCCESS}) ;

  export const addToCart = (productId, cost, count) => {
    return (dispatch, getState) => {
      dispatch(setAddingProductToCart(productId));

      dispatch(signInStart())
      axios
        .post('cart', {product: productId, cost, count})
        .then(res => {
          dispatch(fetchCartItems());
          dispatch(signInSuccess())
        })
        .catch(err => {
         dispatch(addProductToCartError())
        })
        .finally(() => {
         dispatch(clearAddingProductToCart)
        });
    };
  };



export const updateCartItemImmediately = (cartItemId, action) => ({
  type: ActionTypes.UPDATE_CART_ITEM_IMMEDIATELY,
  payload: {cartItemId, action},
});

  export const updateCartItem = (cartItemId, action, count) => {
    return (dispatch, getState) => {
      dispatch(updateCartItemImmediately(cartItemId, action));
  
      axios.put('cart', {id: cartItemId, action, count}).catch(err => {
        dispatch(fetchCartItems());
        dispatch(addProductToCartError());
      });
    };
  };
