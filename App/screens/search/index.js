import React from 'react' ;
import {View} from 'react-native' ; 
import {SafeAreaView} from 'react-native';
import {Input} from '../../components/Input/index'
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ProductList} from '../../components/products List/index'
import {useDispatch , useSelector} from 'react-redux' ;
import {useUpdateEffect} from '../../utils/useUpdateEffect';
import {searchForProduct} from '../../redux/actions/searchActionCreators'

function renderSearchIcon(){
    return(
        <Icon name = 'search' style = {styles.searchIcon}  />
    )
}
export function Searchscreen(props){
    const [input, setInput] = React.useState('');
    const [products, setProducts] = React.useState([]);
    const dispatch = useDispatch () ;
    const appendproducts = useSelector(state => state.search.products) ;

    //const [isloading , setisLoading] = React.useState(false) ;

    useUpdateEffect(()=>{
        setProducts(products.concat(appendproducts))
    } , [appendproducts] )


    const fetchProducts = () => { 

        dispatch(searchForProduct(input , true))
    }

    const continueFetchProducts = () => {
        dispatch(searchForProduct(input));
      };

    useUpdateEffect(()=>{
        setProducts([])
       fetchProducts()
    } , [input] )


    return(
        <SafeAreaView style={styles.outerContainer}>

        <Input placeholder='type Here ...'
         bordered 
         renderIconRight = {renderSearchIcon}  
         onChangeText={setInput}
         wrapperStyle={styles.input}
         />   


        {input ? (
        <ProductList
          data={products}
          onEndReachedThreshold={0.5}
          onEndReached={continueFetchProducts}
         //isLoading={isloading}
        />
      ) : null}

        </SafeAreaView>
        
    )
}