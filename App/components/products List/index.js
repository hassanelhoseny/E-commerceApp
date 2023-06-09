import React from 'react' ;
import {ActivityIndicator, FlatList,  SafeAreaView ,View} from  'react-native';
import {Product} from '../product/index';
import { EmptyList } from '../EmptyList/index';
import styles from './styles';


function renderProduct({item}){
    return(
       <Product  product = {item}  />
    )
}

const keyExtractor = item => item._id;

export function ProductList(props){

    const {isLoading} = props ;

    const Loading = React.useCallback(
        () => (isLoading ? <ActivityIndicator /> : null),
        [isLoading],
      );


      const Empty = React.useCallback(() => (!isLoading ? <ActivityIndicator /> : null), [
        isLoading,
      ]);

    

    return(

       
        <FlatList 
        keyExtractor={keyExtractor}
         numColumns = {2}
         renderItem = {renderProduct}
         ListFooterComponent = {Loading}
         ListEmptyComponent = {Empty}
         //contentContainerStyle={styles.list}
         {...props} 
        
        />
    )
}