import React from  'react'
import {View ,Text} from 'react-native';
import {Input} from '../../components/Input/index';
import {AppButton} from '../../components/AppButton/index';
import styles from './styles';
import {updateUserName} from '../../redux/actions/AuthActions';
import { useDispatch  , useSelector} from 'react-redux';


export function UpdateAccountScreen(props){


    const {navigation} = props ;

    const dispatch = useDispatch() ;

    const user = useSelector(state => state.auth.user) ; 
    
    const [input, setInput] = React.useState({
        value: user.name || '',
        isValid: false,
      });

      const updateInput = value => {
        setInput({
          value,
          isValid: value !== '' && value !== user.name,
        });
      };

    

    return(
        <View style = {styles.container}>

            <View>
            <Input  placeholder = 'Name' 
            stacked
            wrapperStyle={styles.input}
            onChangeText = {updateInput}
            value = {input.value}
            />
            

            </View>
           

            <AppButton  
            title= 'Save' 
             onPress= {()=> dispatch(updateUserName(input.value))} 
             disabled = {!input.isValid}
             />
       
        </View>
    )
}