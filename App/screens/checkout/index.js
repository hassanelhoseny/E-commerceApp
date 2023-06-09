import React from 'react' ;
import {View , Text} from 'react-native' ;
import {AppButton} from '../../components/AppButton/index';
import { useSelector , useDispatch } from 'react-redux';
import { PlatformTouchable } from '../../components/PlatformTouchable';
import styles from './styles';
import { totalSelector } from '../../redux/selector/cartSelectors';
import { Address } from '../../components/Address';
import { makeOrder } from '../../redux/actions';
import {useUpdateEffect} from '../../utils/useUpdateEffect' ;
import {OrderDone} from '../../components/OderDone'


function renderAddressSection(address , navigation){
    return(
        <PlatformTouchable style = {styles.addressSection} onPress = {()=> navigation.navigate("AddAddressScreen")}>
            <Text style = {styles.shipToText}>SHIP TO</Text>
            {   address ? < Address  address={address} />  : <Text style = {styles.Hit}>Hit To Enter Address</Text>}
            <View style={styles.updateWrapper}>
            <Text style = {styles.textUpdate}>UPDATE</Text>
            </View>
            
        </PlatformTouchable>
    )
}
function renderOrderCost(key , value){
    return(
        <View style = {styles.orderCostRow}>
         <Text style={styles.orderCostKey}>{key}</Text>
         <Text style={styles.orderCostValue}>{value}</Text>
        </View>
    )
}
function renderOrderCostSection(total){
    return(
       <View>
           {renderOrderCost('subTotal' , total)}
           {renderOrderCost('shiping' , 'free')}
           <View style = {styles.horizontalRow} />
           {renderOrderCost('Total' , total)}
       </View> 
    )
}
function renderButton(address , dispatch){
    return(
        <AppButton title='Buy' disabled = {!address} 
         onPress = {()=>{dispatch(makeOrder())}}/>
    )
}

export function CheckoutScreen(props){ 


    const addresses = useSelector(state => state.auth.user.addresses) ; 

    const selectedAddressId = useSelector(state => state.auth.selectedAddressId) ;

    const address = addresses.find(item => item._id === selectedAddressId) ;

    const {navigation} = props ; 

    const [shouldShowSuccess , setShouldShowSuccess] = React.useState(false)

    const total = useSelector(totalSelector) ; 


    const success = useSelector(state => state.cart.makeOrderSucess)

    const dispatch = useDispatch() ;


    useUpdateEffect(()=> {
        setShouldShowSuccess(true)
    } , [success] )



    
    return( 
        <View style = {styles.container}>
         {renderAddressSection(address , navigation)}
         {renderOrderCostSection(total)}
         {renderButton(address , dispatch)}
         {shouldShowSuccess &&(
            <View style = {{justifyContent: 'center' , alignItems: 'center' , flex: 1  , marginTop: -250}}>
            <OrderDone  okHandler={()=> {setShouldShowSuccess(false)}} />
         </View>
         )}
         
         
        </View>

    )
}