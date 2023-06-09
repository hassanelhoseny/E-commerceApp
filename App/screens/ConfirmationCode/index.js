import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components/Input';
import {AppButton} from '../../components/AppButton';
import styles from './styles';
import { useInput } from '../../utils/useInput';
import {useSelector , useDispatch} from 'react-redux' ;
import { confirmation } from '../../redux/actions';
import { useUpdateEffect } from '../../utils/useUpdateEffect';
import { showError } from '../../utils/helperFunctions';
import {errorCodeMessageMapper} from '../../utils/errorCodes' ;

 export default function ConfirmationCodeScreen(props) {


const [input, changeInput] = useInput('', [{key: 'isConfirmationCode'}]);

const isLoading = useSelector(state => state.auth.isConfirmation);

const failure = useSelector(state => state.auth.confirmCodeFailure)

 const {phone} = props.route.params ;


 const dispatch = useDispatch() ; 

 useUpdateEffect(()=>{
  showError(errorCodeMessageMapper[failure.errorCode])
} , [failure])

   
  const doneHandler = ()=>{
    if(input.isValid){

     dispatch(confirmation(phone , input.value))
    }

    
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Enter Confirmation Code</Text>
      </View>
      <Input
        style={styles.input}
        bordered
        placeholder="__ __ __ __"
        placeholderPosition="center"
        wrapperStyle={styles.inputWrapper}
        iconWrapperStyle={styles.iconWrapper}
        onChangeText={changeInput}
        keyboardType="numeric"
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

//const MapDispatchToProps = dispatch => ({setToken: token => dispatch ({type: 'SET_TOKEN' , payload: {token}}) ,
 //                                      setUser: user => dispatch  ({type: 'SET_USER' , payload: {user}})
//})

