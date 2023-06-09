import * as ActionTypes  from './ActionTypes' ;
import axios from 'axios' ;
import { createStoreHook } from 'react-redux';




const getHomeDataSuccess = () => ({type: ActionTypes.GET_HOME_DATA_SUCCESS}) ;
const getChildrenCategoriesSuccess = children => ({type: ActionTypes.CHILDREN_CATEGORIES_SUCCESS , payload: {children}}) ;




export const setCats = cats =>  ({
    type: ActionTypes.SET_CATS , 
    payload: {cats}
}) 



export const setProducts = products =>  ({
    type: ActionTypes.SET_PRODUCTS , 
    payload: {products}
})




export const fetchHomeData = cats =>{
   return (dispatch , getState)=>{
       dispatch(fetchHomeCategories(cats)) ;
       dispatch(fetchHomeProducts())
   }
}


export const fetchHomeCategories = cats=>{
    return (dispatch , getState) =>{
        axios.get('/category/get-parents').then(
            res=>{
                const cats = res.data.cats ;
                dispatch(setCats(cats))
                dispatch(getHomeDataSuccess())
                
            }
        )
    }
};

export const fetchHomeProducts = ()=>{

    return (dispatch , getState) =>{ 

        axios.get('/product/best-seller').then(
            res=>{
                const products = res.data.products ;

                dispatch(setProducts(products))
            
            }
        )

    }

}


export const fetchCategoriesChildren = categoryId =>{

    return(dispatch , getState) =>{
        axios.get('/category/get-children/' + categoryId).then(
            res=>{
                const children = res.data.children ;
                
                  dispatch(getChildrenCategoriesSuccess(children))
            }
        )
    }
}

export const appendProducts =(categoryId , products)=> ({ 

    type: ActionTypes.APPEND_PRODUCTS ,
    payload : {categoryId , products}


})

export const setCategoryProductsPage =(categoryId , nextPage)=> ({
  type:ActionTypes.SET_CATEGORY_PRODUCTS_PAGE ,
  payload: {categoryId , nextPage}
})

const loadingStart = categoryId =>({type: ActionTypes.START_LOADING , payload: {categoryId}})
const loadingStop = categoryId =>({type: ActionTypes.STOP_LOADING , payload: {categoryId}})

export const fetchCategoryProducts = category => {

    return ( dispatch , getState ) =>{

        const endpoint = category.parentId? 
        '/product/category/': '/product/parent-category/'


        const calculatedPage = getState().home.categoryProductsNextPages[category._id]  ;

        const nextRequestPage = calculatedPage === undefined?1 : calculatedPage ; 

        if(nextRequestPage) { 

            dispatch(loadingStart(category._id))

            axios.get(endpoint , {params: { id: category._id , page: nextRequestPage}})
            .then(res => {
                dispatch(appendProducts( category._id , res.data.data))
    
                const {lastPage , nextPage} = res.data ; 
    
                const Page = nextPage > lastPage  ? null : nextPage ; 
                dispatch(setCategoryProductsPage(category._id , Page))
            })
            .catch(error => {})
            .finally(dispatch (loadingStop(category._id)))

        }

    }
}


export const setProductsDetails = product =>  ({
    type: ActionTypes.GET_PRODUCT_DETAILS , 
    payload: {product}
})

export const fetchProduct = productId =>{ 
    return(dispatch , getState) =>{ 

        axios.get('/product-by-id/' + productId).then(
            res=>{
         const product = res.data.product ;


        dispatch(setProductsDetails(product))
            }
        ) 

    }

}

