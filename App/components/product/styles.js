
import { StyleSheet } from 'react-native';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const imageWidth = width / 2 - 15;
const imageHeight = imageWidth * 2;




const styles = StyleSheet.create({
    container:{
        shadowColor: 'black',
        shadowOpacity: 0.2 ,
        shadowOffset: {width: 0 , height: 2} ,
        shadowRadius: 8 ,
        elevation: 5 ,
        borderRadius: 10 ,
        backgroundColor: '#FFFAFA' ,
        height: 230 ,
        width: 130 , 
        margin: 25
    },

    imageContainer:{
        width: '100%' ,
        height: '70%',
        borderTopLeftRadius: 10 ,
        borderTopRightRadius: 10 ,
        overflow: 'hidden',
        padding: 2,
        
        elevation: 10

    },

    image:{
        width: '100%' ,
        height: '100%',
    } ,

    text:{
        fontSize: 20 ,
      
        color: 'black',
        
    }
})

export default styles;