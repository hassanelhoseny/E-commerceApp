import React from 'react' ;
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home/index';
import {ProductScreen} from '../screens/product/index';
import {CategoryScreen} from '../screens/category/index' ; 
import {AddAddressScreen} from '../screens/AddAddress'

const Stack = createNativeStackNavigator() ;

export function HomeStack(props){ 

    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options = {{headerShown: false }} />
            <Stack.Screen name = "CategoryScreen" component= {CategoryScreen}
              options = {({route})=> ({title: route.params.category.name})}          
            />
            <Stack.Screen name = "AddAddressScreen" component= {AddAddressScreen} options = {{title: 'Add Address'}} />
            <Stack.Screen name = "ProductScreen" component= {ProductScreen} options = {{headerShown: false }} />
            
        </Stack.Navigator>
    )

}