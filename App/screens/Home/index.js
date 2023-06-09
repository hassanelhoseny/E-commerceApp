import React from 'react' ;
import {View ,  ScrollView, Text , FlatList , ActivityIndicator , SafeAreaView} from 'react-native' ;
import {Category} from '../../components/category/index';
import { ProductList } from '../../components/products List';
import { useDispatch , useSelector } from 'react-redux';
import { fetchHomeData } from '../../redux/actions';
import styles from './styles'
//import { SafeAreaView } from 'react-native-safe-area-context';


function renderCategory({item}){
return <Category  category={item} />
}

const keyExtractor = item => item._id ;

function renderCatageriosList(categories){
    return(
        <SafeAreaView style={{flex: 1}}>
       <FlatList horizontal={true} keyExtractor={keyExtractor}
        data={categories} renderItem={renderCategory} />
        </SafeAreaView>
    )
}
export function Home (){  

    const categories = useSelector(state => state.home.categories);
    const products = useSelector (state => state.home.products) ;


    const dispatch = useDispatch() ;


    React.useEffect (()=>{
       dispatch(fetchHomeData())
    } , [])

    return(
        
        <ScrollView style = {styles.container}>
          
           <Text style = {styles.headerText}>Category</Text>
            { !categories? <ActivityIndicator /> : renderCatageriosList(categories)}


           <Text style = {styles.headerText}> Products</Text>

           
           { !products? <ActivityIndicator /> : <ProductList data= {products}   />}

        </ScrollView>
      
    )
}