import React from 'react' ;
import {View , Text , FlatList , ScrollView} from 'react-native' ;
import {Product} from '../../components/product/index';
import styles from './styles';
import {fetchCategoryProducts , fetchCategoriesChildren } from '../../redux/actions';
import { useDispatch , useSelector} from 'react-redux';
import { ChildrenCategory } from '../../components/ChildrenCategory';
import {ProductList} from '../../components/products List/index'
//import { ScrollView } from 'react-native-gesture-handler';


function renderChildrenCategory (item ,  selectedCategory , setSelectedCategory) {
    return <ChildrenCategory
      category={item} 
       selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}  />
}


const keyExtractor = item => item._id ;



function renderChildrenCategories (childrenCategories ,  selectedCategory , setSelectedCategory) {
    return <FlatList 
    data={childrenCategories}
      renderItem={({item})=>renderChildrenCategory(item ,  selectedCategory , setSelectedCategory)}
      keyExtractor= {keyExtractor}
      horizontal = {true}
      />
}

export function CategoryScreen(props){
    
    const {category} = props.route.params ;

    const childrenCategories = useSelector(state => state.home.childrenCategories[category._id] || [] ) ; 

    const [selectedCategory , setSelectedCategory] = React.useState(category) ;

    const products =  useSelector (state => state.home.categoryProducts[selectedCategory._id] || []) ;

    const isFetching = useSelector(state => state.home.isFetchingCategoryProducts[selectedCategory._id])



    const dispatch = useDispatch() ;

    React.useEffect(()=>{
        products.length === 0 &&  dispatch(fetchCategoriesChildren(category._id))
          
    } ,[])

    React.useEffect(()=>{
        products.length === 0 && dispatch(fetchCategoryProducts(selectedCategory))
  } ,[selectedCategory])

    return(
        <View style = {styles.container}>
           
           
            
            {renderChildrenCategories([category , ...childrenCategories] , selectedCategory , setSelectedCategory)} 

            <Text style= {styles.headerText}> products</Text>  
            
            <ProductList
            isLoading={isFetching}
             contentContainerStyle={styles.list} 
              data= {products} 
              onEndReachedThreshold = {0.5}
              onEndReached = {()=> dispatch(fetchCategoryProducts(category))}
              />
            
          
        </View>
    )
}