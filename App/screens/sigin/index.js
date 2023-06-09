import React, { useState } from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components/Input';
import styles from './styles';
import {AppButton} from '../../components/AppButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useInput} from '../../utils/useInput' ;
import {useDispatch , useSelector} from 'react-redux' ;
import {signIn} from '../../redux/actions/AuthActions';
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {showError} from '../../utils/helperFunctions' ;
import {errorCodeMessageMapper} from '../../utils/errorCodes';




function renderPhoneIcon() {
    return <Icon name="call" style={styles.icon} />;
  }
  
  export function SignInScreen(props){ 

    const {navigation} = props ;

    const [input  , changeInput] = useInput('' , [{key: 'isPhone'}]);

    const isLoading = useSelector(state => state.auth.isSigningIn )
    const success = useSelector(state => state.auth.signInSuccess) ;
    const failure = useSelector(state => state.auth.signInFailure) ;

    const dispatch = useDispatch() ; 

    useUpdateEffect(()=>{
      navigation.navigate('ConfirmationCode' , {phone: input.value})
     } , [success])
  
     useUpdateEffect(()=>{
      showError(failure.errorCode)
     } , [failure])

    const doneHandler =()=>{
      if(input.isValid){ 
        dispatch(signIn(input.value))
      }

    }

    return (
        <View style={styles.container}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Enter Your Phone Number</Text>
          </View>
          <Input
            style={styles.input}
            underlined
            renderIconLeft={renderPhoneIcon}
            placeholder="Phone"
            wrapperStyle={styles.inputWrapper}
            iconWrapperStyle={styles.iconWrapper}
            onChangeText={changeInput}
            keyboardType="numeric"
            onSubmitEditing={()=> alert("test")}
            editable={!isLoading}
          />
          <View style={styles.buttonWrapper}>
            <AppButton
              title="DONE"
              onPress={doneHandler}
              disabled={!input.isValid}
             isLoading={isLoading}
            />
          </View>
        </View>
      );
}
