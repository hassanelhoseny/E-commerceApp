import React from 'react' ;
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from '../screens/sigin/index';
import ConfirmationCodeScreen from '../screens/ConfirmationCode/index'

const Stack = createNativeStackNavigator() ;

export  function AuthStack(){ 

    return(
    <Stack.Navigator>
        <Stack.Screen name='SignInScreen' component={SignInScreen} options= {{headerShown: false}}/>
        <Stack.Screen name='ConfirmationCode' component={ConfirmationCodeScreen} options= {{headerShown: false}} />
    </Stack.Navigator>
    )
}