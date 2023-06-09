import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UNEXPECTED_ERROR_CODE } from '../../utils/errorCodes';


export const setToken = token =>  ({
    type: ActionTypes.SET_TOKEN , 
    payload: {token}
}) 



export const setUser = user =>  ({
    type: ActionTypes.SET_USER , 
    payload: {user}
})

const signInStart = () => ({type: ActionTypes.SIGNIN_START }) ;

const signInSuccess = () => ({type: ActionTypes.SIGNIN_SUCCESS}) ;

const signInFaliure = errorCode => ({type: ActionTypes.SIGNIN_FAILURE , payload: {errorCode} }) ;

const confirmationCodeStart = () => ({type: ActionTypes.CONFIRM_CODE_START }) ;

const confirmationCodeSuccess = () => ({type: ActionTypes.CONFIRM_CODE_SUCCESS}) ;

const confirmationCodeFaliure = errorCode => ({type: ActionTypes.CONFIRM_CODE_FAILURE , payload: {errorCode} }) ; 

const clearReduxData = () => ({type: ActionTypes.CLEAR_REDUX_DATA}) ;

const addAddressSuccess = ()=> ({type: ActionTypes.ADD_ADDRESSS_SUCCESS})

const getOrderSuccess = orders => ({type: ActionTypes.GET_ORDER_SUCCESS , payload: {orders}}) ;

export const signIn = phone =>{

    return(dispatch , getState) => {  

        dispatch(signInStart())

        axios.post('/verify' , {phone})
        
        .then(res => {
            dispatch(signInSuccess())
          alert(res.data.code) ;
          
        })
        .catch(err => { 
            dispatch(signInFaliure(UNEXPECTED_ERROR_CODE))
          console.log(err)
        })

    }
}

export const confirmation = (phone , code) =>{
    return (dispatch , getState)=>{
        dispatch(confirmationCodeStart()) ;

    axios.post('/verify/validate' , {phone: phone , code })
    .then(res => {
        dispatch(confirmationCodeStart())
      console.log(res.data)
      const {token , userData} = res.data ;
      axios.defaults.headers.Authorization = 'Bearer ' + token
      dispatch (setToken(token)) ;
      dispatch (setUser(userData)) ;
      AsyncStorage.setItem('@ACCESS_TOKEN', token)
      AsyncStorage.setItem('@USER_DATA' , JSON.stringify(userData)) 
    })  

    .catch(err => {
        const errorCode = err.message.includes('401') ? WRONG_CODE_ERROR_CODE : UNEXPECTED_ERROR_CODE ;
           dispatch(confirmationCodeFaliure(errorCode))
    })

    }
}


export const logout = () =>{
    return(dispatch , getState)=>{
        axios.defaults.headers.Authorization= undefined ;
        AsyncStorage.clear() ;
        dispatch(clearReduxData())
    }
}

export const getUserData = ()=>{
    return(dispatch , getState)=>{
        axios.get('/user/get-data')
        .then(res => {
            dispatch(setUser(res.data.userData))
        })
    } 
}


export const updateUserName = name =>{

    return (dispatch  , getState) =>{
        axios.put('/user/change-name' , {name} )
        .then(res => {
            dispatch(getUserData())
            alert("name is updated ")
        } )
    }
}


export const addAddress = ({name, phone, city, area, street, building}) => {
  
    return (dispatch, getState) => {
      axios
        .post('/address', {name, phone, city, area, street, building})
        .then(res => {
          dispatch(getUserData());
          dispatch(addAddressSuccess())
          alert("done sucessfully")
         dispatch(selectAddress(res.data._id));
         
        });
    };
  };

  export const addressSelected = addressId => ({
    type: ActionTypes.ADDRESS_SELECTED,
    payload: {addressId},
  });

  export const ordersData = orders => ({
    type: ActionTypes.GET_ORDER_SUCCESS,
    payload: {orders},
  });


  export const selectAddress = addressId => {
    return (dispatch, getState) => {
      AsyncStorage.setItem('@ADDRES_ID', addressId);
  
      dispatch(addressSelected(addressId));
    };
  };

  export const getOrders = orders => {
    return (dispatch , getState ) =>{
        axios.get('/order').then(
            res=> {

                const orders = res.data.orders;
            
               dispatch(getOrderSuccess(orders))
                dispatch(ordersData(orders))
            }
        )
    }
}