import React from 'react' ;
import {View , Image , Text} from 'react-native' ;
import {Card} from '../Card/index';
import { AddToCartButton } from '../AddToCartButton';
import styles from './styles';
import { dummyCartItem1 } from '../../utils/dummyData';
import { Price } from '../Price';
import {PlatformTouchable} from '../PlatformTouchable';
import { useNavigation } from '@react-navigation/native';
import { IMAGES_URL } from '../../utils/constants';

export function CartItem(props){
   const {cartItem} = props ; 
   const navigation = useNavigation()

 

    return  (
         
            <Card style={styles.outerContainer}>
                <View  style= {styles.container} >

                <Image style={styles.image} source={{uri:IMAGES_URL + 'products/resized/'+ cartItem.product.images[0]}}   />
                <View style={styles.wrapper}>
                    <Text style={styles.title}>{cartItem.product.title}</Text>

                    <Price  price={cartItem.product.price} 
                    discount={0.2} 
                    count = {cartItem.count}
                    />

                    <AddToCartButton  productId = {cartItem.product._id} 
                     cost={cartItem.product} 
                      count={cartItem.product.increaseCount} />
                </View>
                </View>
            </Card>

        
         
    )
}

