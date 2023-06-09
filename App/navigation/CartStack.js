import React from 'react' ;
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartScreen} from '../screens/cart/index';
import {ProductScreen} from '../screens/product/index';
import {CheckoutScreen} from '../screens/checkout/index'

const Stack = createNativeStackNavigator() ;

export function CartStack(props){ 

    return(
        <Stack.Navigator>
            <Stack.Screen name="CartScreen" component={CartScreen} options = {{headerShown: false }} />
            
            <Stack.Screen name = "CheckoutScreen" component= {CheckoutScreen} options = {{title : 'Checkout' }}/>

            <Stack.Screen name = "ProductScreen" component= {ProductScreen}/>
           
        </Stack.Navigator>
    )

}