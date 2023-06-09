import React from 'react' ;
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Searchscreen} from '../screens/search/index';
import {ProductScreen} from '../screens/product/index';

const Stack = createNativeStackNavigator() ;

export function SearchStack(props){ 

    return(
        <Stack.Navigator>
            <Stack.Screen name="Searchscreen" component={Searchscreen} options = {{headerShown: false }} />

            <Stack.Screen name = "ProductScreen" component= {ProductScreen} options = {{headerShown: false}}/>
           
        </Stack.Navigator>
    ) 

}