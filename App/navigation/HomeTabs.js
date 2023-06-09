import React from 'react' ;
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import { IonIcon } from '../components/IonIcon';
import { HomeStack } from './HomeStack';
import { CartStack } from './CartStack';
import { SearchStack } from './SearchStack';
import { AccountStack } from './AccountStack';
import { TabCartIcon } from '../components/cartIcon';


const Tabs = createBottomTabNavigator() 

export function HomeTabs (){

    return(
        <Tabs.Navigator screenOptions={({route}) =>{
           
            const iconName = 
            {
                HomeStack: 'home' , 
              
                SearchStack: 'search' , 
                AccountStack: 'person' 
           } ;
            const label = {
                HomeStack: '' ,  
                CartStack: '' , 
                SearchStack: '' , 
                AccountStack: '' 
            }


            return {
                tabBarIcon:  ({focused})=> route.name === 'CartStack'? <TabCartIcon  focused= {focused} /> :
                <IonIcon name = {iconName[route.name]} style = {{color: focused ? 'blue' : 'black' , fontSize: 24}} /> 

              , tabBarLabel: ({focused})=> <Text style = {{ color: focused ? 'blue' : 'black' , fontSize: 13 , fontWeight: 'bold' , marginVertical:-4}}>{label[route.name]}</Text> }
        }}>
            <Tabs.Screen name = 'HomeStack' component= {HomeStack} options={{headerShown : false }} />
            <Tabs.Screen name = 'CartStack' component= {CartStack}  options={{headerShown : false }} />
            <Tabs.Screen name = 'SearchStack' component= {SearchStack} options={{headerShown : false }}  />
            <Tabs.Screen name = 'AccountStack' component= {AccountStack} options={{headerShown : false }} />
        </Tabs.Navigator>
    )
}
