import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({ 

    container:{
        flex: 1 ,
        padding: '10@s'
    } ,
    infoSection:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    personIcon:{
        fontSize: '55@s',
        color: 'black'
    },
   
    verticalLine:{
        width: 1 ,
        backgroundColor: 'gray',
        marginHorizontal: '20@s'
      
    },
    infoText:{
        fontSize: '18@s' ,
        color: 'black'

    } ,
    horizontalLine:{
        height: 1 ,
        backgroundColor: 'gray'
    },
    icontitleWrapper:{
        flexDirection: 'row'
    },
    icon:{
      fontSize: '30@s',
      marginEnd: '10@s',
      color: 'black'
    },
    title:{
     fontSize: '15@s',
     color: 'black'
    },
    button:{
        marginVertical: '10@s'
    },

    hitToEnterNameButton: {
      color: 'blue',
      textDecorationLine: 'underline',
    },

})


export default styles ;
