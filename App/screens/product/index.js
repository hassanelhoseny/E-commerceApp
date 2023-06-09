import React from 'react' ;
import {View , ScrollView,Image, Text, ActivityIndicator} from 'react-native';
import {AddToCartButton} from '../../components/AddToCartButton/index';
import {dummyProduct1} from '../../utils/dummyData'
import { IonIcon } from '../../components/IonIcon';
import styles from './styles'
import { Price } from '../../components/Price';
import { fetchProduct } from '../../redux/actions';
import { useDispatch , useSelector } from 'react-redux';
import { IMAGES_URL } from '../../utils/constants';

export function ProductScreen(props){


    const {productId} = props.route.params ;

    const {navigation} = props ;


    const [product , setProduct] = React.useState() ;

    const dispatch = useDispatch() ;


    const reduxProduct = useSelector(state=> state.home.product) ;

    const isLoading = useSelector(state => state.auth.isSigningIn ) ;



    React.useEffect(()=> {

        if( reduxProduct && reduxProduct._id === productId){
            setProduct(reduxProduct)
        }

    } ,  [reduxProduct] )



    React.useEffect (()=>{
         dispatch(fetchProduct(productId))
    } , [])
  
return product ? (
    <View style= {styles.container}>
        <ScrollView>
         <Image style= {styles.image} source={{uri: IMAGES_URL + 'products/' + product.images[0]}}   />
         <View style = {styles.titleWrapper}>
            <IonIcon name = 'arrow-back' style= {styles.backIcon} onPress= {()=> navigation.goBack()} />
          
            <View style = {styles.titleName}>
            <Text numberOfLines={1} style = {styles.title}> {product.title} </Text>

            </View>
            </View>

            <View style = {styles.Wrapper}>

            <Price  price = {product.price}  discount= {product.discount}  /> 
           <Text style = {styles.description}> Description </Text>
           <Text style = {styles.descriptionText}>{product.details}</Text>

           <View style = {styles.buttonWrapper}>
          <AddToCartButton productId={productId} cost={product.price}
           count = {product.increaseCount} isLoading={isLoading}
           />

          </View>
          

          </View>

          </ScrollView>

    </View>
) : <ActivityIndicator />


}