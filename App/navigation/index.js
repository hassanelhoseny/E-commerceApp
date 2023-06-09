import React from 'react' ;
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {HomeTabs} from './HomeTabs'




export function AppContainer(props){ 

    const {isAuthentecated} = props;
    
    return( 

        <NavigationContainer>
            {isAuthentecated ? <HomeTabs /> : <AuthStack />}
        </NavigationContainer>

    )
}