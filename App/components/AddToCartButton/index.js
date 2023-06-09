import React from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../AppButton';
import { useSelector , useDispatch } from 'react-redux';
import { updateCartItem } from '../../redux/actions';
import styles from './styles';
import { addToCart } from '../../redux/actions';

export function AddToCartButton(props) {  
  const dispatch = useDispatch() ;
  const {productId ,cost , count , isLoading} = props ;
  const cartItem = useSelector(state => state.cart.cartItems)

  const [quantity , setQuantity] = React.useState(0) ;

  const matchingCartItem = cartItem.find(
    item => item.product._id === productId,
  );


  const cartICount = matchingCartItem ? matchingCartItem.count : 0 ;


  const incrementQuantityHandler = () => {
    if (cartICount === 0) {
      dispatch(addToCart(productId, cost, count , isLoading));
    } else {
      dispatch(updateCartItem(matchingCartItem._id, 'increase', count));
    }
  };

  const decrementQuantityHandler = () => {
    const action = cartICount === 1 ? 'delete' : 'decrease';

    dispatch(updateCartItem(matchingCartItem._id, action, count));
  };

  const renderInitialButton = () => {
    return (
      <AppButton
        onPress={incrementQuantityHandler}
        title="ADD TO CART"
        wrapperStyle={styles.wrapper}
        isLoading = {isLoading}
       
      />
    );
  };

  const renderIncreaseDecreaseButton = () => {
    return (
      <View style={[styles.increaseDecreaseContainer, styles.wrapper]}>
        <Text style={styles.plusMinus} onPress={decrementQuantityHandler}>
          -
        </Text>
        <Text>{cartICount}</Text>
        <Text style={styles.plusMinus} onPress={incrementQuantityHandler}>
          +
        </Text>
      </View>
    );
  };

  return cartICount === 0
    ? renderInitialButton()
    : renderIncreaseDecreaseButton();
}
