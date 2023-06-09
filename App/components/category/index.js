import React from 'react' ;
import {View , Text , Image , StyleSheet} from 'react-native' ;
import styles from './styles' ;
import { useNavigation } from '@react-navigation/native';
import {PlatformTouchable} from '../PlatformTouchable';
import {IMAGES_URL} from '../../utils/constants';
import {cutLongName} from '../../utils/helperFunctions'


export function Category (props) {

    const {category} = props ;


    const navigation = useNavigation() ;

    return(
        <PlatformTouchable style = {styles.container} onPress={()=> navigation.navigate('CategoryScreen' , {category})}>

            <View style = {styles.imageContainer}>
              <Image style = {styles.image}  source={{uri: IMAGES_URL + 'cat-thumbs/resized/'+ category.image }}   /> 
              </View>

               <View style = {{padding: 10}}>
               <Text style= {styles.text}>{ cutLongName(category.name)}</Text>
               </View>
              
        </PlatformTouchable>
    )
}


