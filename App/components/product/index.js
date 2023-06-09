import React from 'react' ;
import {View , Text , Image , StyleSheet} from 'react-native' ;
import { Price } from '../Price';
import styles from './styles' ;
import { useNavigation } from '@react-navigation/native';
import {PlatformTouchable} from '../PlatformTouchable';
import { IMAGES_URL } from '../../utils/constants';
import { cutLongName } from '../../utils/helperFunctions';


export function Product (props) {

    const navigation = useNavigation() ;
    const {product} = props ;


    return(
        <PlatformTouchable style = {styles.container} onPress={()=> navigation.navigate('ProductScreen' ,  {productId : product._id})}>

            <View style = {styles.imageContainer}>
              <Image style = {styles.image}  source={{uri: IMAGES_URL +'products/resized/'+ product.images[0] }}   /> 
              </View>

               <View style = {{padding: 10}}>
               <Text style= {styles.text}>{cutLongName( product.title)}</Text>

               <Price   price={product.price}  discount={0.02} />
               </View>
              
        </PlatformTouchable>
    )
}


