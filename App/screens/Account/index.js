import React from 'react' ; 
import {View , Text } from 'react-native' ;
import {IonIcon} from '../../components/IonIcon/index';
import styles from './styles';
import { PlatformTouchable } from '../../components/PlatformTouchable';
import {useDispatch , useSelector} from 'react-redux' ;
import {logout} from '../../redux/actions/AuthActions';




    function renderInfo(user , navigation , isFetchingUser){
        return(
            <View style = {styles.infoSection}> 
             <IonIcon name = "person" style ={styles.personIcon} /> 
             <View style = {styles.verticalLine}   />  
    
             {isFetchingUser ? (
        <ActivityIndicator />
      ) : (

          <View>
               <Text
            onPress={() => {
              !user.name && navigation.navigate('UpdateAccountScreen');
            }}
            style={[
              styles.infoText,
              !user.name && styles.hitToEnterNameButton,
            ]}>
            {user.name || 'Enter Name'}
          </Text>
              <Text style = {styles.infoText}> {user.phone} </Text>
          </View>
        )}
            
            </View>
        )
    }

    function renderButton(iconName , title , onPress ){
        return(
            <PlatformTouchable style = {styles.button} onPress={onPress} >
                <View style = {styles.icontitleWrapper}>
                <IonIcon name= {iconName} style = {styles.icon}  />
                <Text style = {styles.title}>{title}</Text> 
                </View>
                
                <View  style = {styles.horizontalLine}   />
            </PlatformTouchable>
        )
    }

    function renderButtonSection(navigation , onDispatchLogout){
        return(
            <View style = {{marginVertical: 70 }}>
               {renderButton('person' , 'profile' , ()=> navigation.navigate('UpdateAccountScreen') )}
               {renderButton('location' , 'shipping Address', ()=> navigation.navigate('AddAddressScreen'))}
               {renderButton('cart' , 'previous orders' , ()=> navigation.navigate('OrdersScreen'))}
               {renderButton('log-out' , 'log Out' , onDispatchLogout)}  
            </View>
        )
    }
  function AccountScreen(props){ 
     const {navigation} = props ;
     const isFetchingUser = useSelector(state => state.auth.userDataLoading);
     const user = useSelector(state => state.auth.user);
     const dispatch = useDispatch();
     const onDispatchLogout = () => dispatch(logout()) ;
    return(
        <View style= {styles.container}>
            {renderInfo(user , navigation , isFetchingUser)}
            {renderButtonSection(navigation , onDispatchLogout)}

        </View>
    )
}

export default AccountScreen ;