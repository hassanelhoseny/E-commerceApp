import React from 'react' ;
import {View , Image , Text} from 'react-native' ;
import {Card} from '../Card/index';
import styles from './styles';
import { dummyCartItem1 } from '../../utils/dummyData';
import { Price } from '../Price';
import {IMAGES_URL , orderStatusMapper} from '../../utils/constants'
import { EmptyList } from '../EmptyList';

export function Order(props){

    const {order} = props ;

    const firstCartItem = order.items[0];

    

    return( !firstCartItem ?<EmptyList  /> :
        <Card style = {styles.container}> 
        <Image style = {styles.image}
        source = {{uri:IMAGES_URL + 'products/resized/'+ firstCartItem.product.images[0]}} />
        
        <View style = {styles.Wrapper}>

            <Text numberOfLines= {1} style={styles.title}>{firstCartItem.product.title}</Text>
            <Price  price = {order.totalCost}  /> 
            <View style = {styles.statusWrapper}>
            <Text style = {styles.statusText}>{orderStatusMapper[order.status]}</Text> 
            </View>
            
        </View> 

    </Card>
  
        
    )
}

 