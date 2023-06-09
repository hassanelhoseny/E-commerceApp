import React from 'react' ;
import {Text , View , StyleSheet} from 'react-native' ;
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Order } from './App/components/Order';
import { AccountScreen } from './App/screens/Account';
import { AddAddressScreen } from './App/screens/AddAddress';
import { OrdersScreen } from './App/screens/orders';
import { UpdateAccountScreen } from './App/screens/updateAccount';
import {Home} from './App/screens/Home/index'
import { CartScreen } from './App/screens/cart';
import {AppContainer} from './App/navigation/index'
import axios from 'axios';
import { useSelector , useDispatch}  from 'react-redux' ;
import {setToken , setUser , getUserData , fetchCartItems} from './App/redux/actions';
import SplashScreen from 'react-native-splash-screen'

//import W from 'woocommerce';

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}


 function App(props){ 

  const dispatch = useDispatch() ;

  const token = useSelector(state => state.auth.token)

  React.useEffect( ()=> {  
      
   AsyncStorage.getItem('@ACCESS_TOKEN').then( val =>{ 
    dispatch (setToken(val));
    SplashScreen.hide()
    if(val){ 

      axios.defaults.headers.Authorization = 'Bearer ' + val ;
      dispatch(fetchCartItems()) ;
       AsyncStorage.getItem('@USER_DATA').then( user=> { 
       dispatch ( setUser(JSON.parse(user)) ) ;
       dispatch(getUserData())
      })

    }
  }) 
  } , [token])

  return   token !== '' &&  <AppContainer isAuthentecated={!!token} />
 
  
}

export default App ;
  