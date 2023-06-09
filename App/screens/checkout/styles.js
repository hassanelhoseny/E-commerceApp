import {ScaledSheet} from 'react-native-size-matters';


const styles = ScaledSheet.create({

    container: {
      flex: 1 ,
      padding: '10@s',
      justifyContent: 'space-between'
    },

    shipToText:{
        fontSize: '20@s',
        fontWeight: 'bold',
        padding: '10@s'
    },
    updateWrapper:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    addressSection:{
        borderWidth:1 ,
        borderRadius: 10 ,
        
        padding: '10@s'
    },
    textUpdate:{
        textDecorationLine: 'underline',
        fontWeight: 'bold' ,
        fontSize: '16@s'

    },
    horizontalRow:{
        height: 1 ,
        backgroundColor: 'gray',
        marginVertical: '5@vs'
    },
    orderCostRow:{
        flexDirection: 'row' ,
        justifyContent: 'space-between',

    },
   
    orderCostKey:{
        fontSize: '16@s',
        color: 'gray'
    },
    orderCostValue:{
        fontSize: '16@s'
    } ,

    Hit:{
        color: 'red',
        fontSize: '14@s'
    }

})

export default styles ;
