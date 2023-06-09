import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window') ;

const imageDim = width ;

const styles = ScaledSheet.create({
    container:{
        flex:1 
    },

    image:{
        height: imageDim ,
        width: imageDim
       
    },
    titleWrapper:{
        position: 'absolute',
        flexDirection: 'row',
        
    },
    backIcon:{
        fontSize: '32@s',
        color: '#fff',
        paddingStart: '20@s',
        paddingVertical: '10@s',
    },
    title:{
        fontSize: '18@s' ,
        fontWeight: 'bold',
        color: '#fff'
    },

    titleName:{
        flex:1 ,
        flexDirection: 'row' ,
        alignItems: 'center' ,
        justifyContent: 'center'
    },
    buttonWrapper:{
      padding: '5@s' ,
      flex: 1 ,
      justifyContent: 'flex-end'
        
    },
    Wrapper:{
        flex: 1,
        padding: '10@s'
    },
    description:{
        fontWeight: 'bold',
        fontSize: '18@s' ,
        paddingVertical: '10@s',
        color: 'black'
    },

    descriptionText:{
      fontSize: '14@s' ,
      color: 'black'
    }
})

export default styles ;