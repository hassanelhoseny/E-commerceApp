import {ScaledSheet} from 'react-native-size-matters'


const styles = ScaledSheet.create({

    image:{
        width: '100@s' ,
        height: '100@s',
        marginEnd: '10@s'
    } ,

    container:{
        flexDirection: 'row',
        padding: '10@s',
        margin : '10@s'
    },

    Wrapper:{
        flex: 1 ,
        justifyContent: 'space-between'
    },
    statusWrapper:{
        flexDirection: 'row' ,
        justifyContent: 'flex-end'
    },
    statusText:{
      fontSize: '16@s' ,
      fontWeight: 'bold'
    },
    title:{
        fontSize: '15@s'
    }


})


export default styles ;