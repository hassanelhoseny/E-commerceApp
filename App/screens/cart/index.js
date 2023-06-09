import React from 'react' ;
import {View , Text , FlatList } from 'react-native' ;
import { AppButton } from '../../components/AppButton';
import { CartItem} from '../../components/cartItem';
import { useDispatch , useSelector  } from 'react-redux';
import { totalSelector } from '../../redux/selector/cartSelectors';
import { EmptyList } from '../../components/EmptyList';
import { IonIcon } from '../../components/IonIcon';
import styles from './styles';

  

function renderCartItem({item}){
    return(
      <CartItem cartItem={item} />
    )
  }

  const keyExtractor = item => item._id;
  
  function renderCartItems(cartItems){
    return(
       <FlatList 
       keyExtractor={keyExtractor}
       //contentContainerStyle={styles.list}
        data = {cartItems} 
         renderItem = {renderCartItem} 
         ListEmptyComponent={EmptyCart}
         />
    )
  }


  function EmptyCart() {
    return (
      <EmptyList
        renderIcon={() => <IonIcon name="cart" style={styles.cartIcon} />}
        renderText={() => <Text style={styles.emptyText}>Empty Cart</Text>}
      />
    );
  }

  const dispatch = useDispatch() ;


  
export function CartScreen(props){ 

  const {navigation} = props ;

  const cartItems = useSelector(state => state.cart.cartItems) ;
  const total = useSelector(totalSelector) ; 


    return(
        <View style={styles.container}>
           {renderCartItems(cartItems)}
           
          <View style={styles.wrapper}>
                <Text style={styles.totalText}>Total =  {total} </Text> 
                <AppButton  title='checkout' titleStyle={styles.checkoutText} 
                 onPress = {()=> {navigation.navigate('CheckoutScreen')}} 
                 disabled = {cartItems.length === 0}
                 />
            </View>
          
        </View>
    )
}