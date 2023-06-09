import React from  'react'
import {View ,Text , ScrollView , ActivityIndicator} from 'react-native';
import {Input} from '../../components/Input/index';
import {AppButton} from '../../components/AppButton/index';
import styles from './styles';
import {Address} from '../../components/Address/index';
import { useDispatch , useSelector } from 'react-redux';
import { addAddress } from '../../redux/actions/AuthActions';
import { useUpdateEffect } from '../../utils/useUpdateEffect';


export function AddAddressScreen(props){

    

    const [inputs , setInputs] = React.useState ({}) ; 
    const [isValid, setIsValid] = React.useState(false);
    const success = useSelector(state => state.auth.addAddressSuccess) ;
    const user = useSelector(state => state.auth.user) ;
    const selectedAddressId = useSelector(state => state.auth.selectedAddressId) ;
    
    const dispatch = useDispatch();


    useUpdateEffect(()=> {
        setInputs({})
    } , [success])

    const highOrderSetInput = key => {
        return value => {
          setInputs({
            ...inputs,
            [key]: value,
          });
        };
      };

      React.useEffect(() => {
        setIsValid(
          inputs.name &&
            inputs.phone &&
            inputs.city &&
            inputs.area &&
            inputs.street &&
            inputs.building,
        );
      }, [inputs]);

    return(
        <View style = {styles.container}>

            <ScrollView>
            <Input placeholder= 'Name' stacked wrapperStyle={styles.input}
              onChangeText={highOrderSetInput('name')}
              value={inputs.name || ''}  />

            <Input placeholder= 'Phone' stacked wrapperStyle={styles.input} 
             onChangeText={highOrderSetInput('phone')} 
             value={inputs.phone || ''} />

            <Input placeholder= 'City' stacked wrapperStyle={styles.input} 
              onChangeText={highOrderSetInput('city')} 
              value={inputs.city || ''} /> 

            <Input placeholder= 'Area' stacked wrapperStyle={styles.input} 
              onChangeText={highOrderSetInput('area')}
              value={inputs.area || ''} /> 

            <Input placeholder= 'Street' stacked wrapperStyle={styles.input} 
               onChangeText={highOrderSetInput('street')} 
               value={inputs.street || ''} />

            <Input placeholder= 'Building' stacked wrapperStyle={styles.input} 
             onChangeText={highOrderSetInput('building')} 
             value={inputs.building || ''}  />


{user.addresses.map(address => {
  return <Address address={address} />;
})}

            </ScrollView>
           

            <AppButton  title= 'Add'  onPress  = { ()=> {
                dispatch(addAddress(inputs , props)) }}
                disabled = {!isValid}
              />
       
        </View>
    )
}