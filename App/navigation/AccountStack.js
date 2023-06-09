import React from 'react' ;
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account/index';
import {AddAddressScreen} from '../screens/AddAddress/index';
import {UpdateAccountScreen} from '../screens/updateAccount/index' ;
import {OrdersScreen} from '../screens/orders/index'

const Stack = createNativeStackNavigator() ;

export function AccountStack(props){ 

    return(
        <Stack.Navigator>
            <Stack.Screen name="AccountScreen" component={AccountScreen} options = {{headerShown: false }} />

            <Stack.Screen name = "AddAddressScreen" component= {AddAddressScreen} options = {{title: 'Add Address'}}/>
            <Stack.Screen name = "UpdateAccountScreen" component= {UpdateAccountScreen} options={{title: 'Update Info'}}/>
            <Stack.Screen name = "OrdersScreen"  component= {OrdersScreen} options = {{title: 'orders'}}/>
           
        </Stack.Navigator>
    )

}