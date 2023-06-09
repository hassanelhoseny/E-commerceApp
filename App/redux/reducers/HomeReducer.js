import * as  ActionTypes from '../actions/ActionTypes'
const initialState = {

    isGettingData : false ,
    GettingDataStart: null ,
    GettingDataSuccess: null ,
    GettingDataFail: null ,

    
    childrenCategories: {} ,

    categoryProducts : {}  ,

    categoryProductsNextPages: {} , 

    product: null ,
    isFetchingCategoryProducts : {}
} ;


function HomeReducer (state = initialState , action ){ 

    switch (action.type){

        case ActionTypes.SET_CATS :
            
            return {
                ...state ,
                categories : action.payload.cats ,
                
            } ;


        case ActionTypes.SET_PRODUCTS:

            return{
                ...state , 
                products : action.payload.products
            }

        case ActionTypes.GET_HOME_DATA_START:
            return {
                ...state ,
                isGettingData: true 

            }
        case ActionTypes.GET_HOME_DATA_SUCCESS:
           
                return {
                    ...state ,
                    isGettingData: false ,
                    GettingDataSuccess: {} ,
                    
                }
        case ActionTypes.GET_HOME_DATA_FAIL:
                    return {
                        ...state ,
                        isGettingData: false ,
                        GettingDataFail: {} ,
                        GettingDataFail: {errorCode: action.payload.errorCode}
                        
                    }

                    case ActionTypes.CHILDREN_CATEGORIES_SUCCESS: 


                      
           
                        return {
                            ...state ,
                         childrenCategories:{
                             ...state.childrenCategories ,
                               [action.payload.children[0].parentId] : action.payload.children
                           }
                            
                        }

                case ActionTypes.APPEND_PRODUCTS: 

                const catId = action.payload.categoryId ;

                return{
                    ...state ,
                    categoryProducts: {
                        ...state.categoryProducts ,
                        [catId] : (state.categoryProducts[catId] || []).concat(action.payload.products)
                    }
                }

                case ActionTypes.SET_CATEGORY_PRODUCTS_PAGE:
                    return {
                        ...state ,
                        categoryProductsNextPages : {
                            ...state.categoryProductsNextPages,
                            [action.payload.categoryId] : action.payload.nextPage ,
                        }
                    }

                case ActionTypes.GET_PRODUCT_DETAILS:

                    return{
                        ...state,
                        product: action.payload.product
                    }

                    case ActionTypes.START_LOADING:
                       
                     
                        return{
                            ...state,
                            isFetchingCategoryProducts: {
                               ...state.isFetchingCategoryProducts,
                                [action.payload.categoryId] : true
                            }
                        }

                        case ActionTypes.STOP_LOADING:

                            return{
                                ...state,
                                isFetchingCategoryProducts: {
                                    ...state.isFetchingCategoryProducts,
                                 [action.payload.categoryId] : false
                                }
                            }


default: 
       return state ;

    }
}



export default HomeReducer ;