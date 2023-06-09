import * as ActionTypes  from '../actions/ActionTypes'
const initialState = {
    token: '' ,
    user: null ,
    isSigningIn: false ,
    signInSuccess: null,
    signInFailure: null  ,
    isConfirmation: false ,
    confirmCodeSuccess: null,
    confirmCodeFailure: null  ,
    updateNameSuccess: null,
    addAddressSuccess: null,
    selectedAddressId: null,
    isAddedd: false,
    getOrderSuccess: null,
    isOrdered: false , 
    orders : [] ,
} ;

function authReducers (state = initialState , action){

    switch(action.type){ 
        case ActionTypes.SET_TOKEN :
            return {
                ...state ,
                token : action.payload.token ,
                
            } ;


        case ActionTypes.SET_USER:
            return{
                ...state , 
                 user : action.payload.user
            }
            case ActionTypes.SIGNIN_START:
                return {
                    ...state ,
                    isSigningIn: true
    
                }
            case ActionTypes.SIGNIN_SUCCESS:
                    return {
                        ...state ,
                        isSigningIn: false ,
                        signInSuccess: {} ,
                        
                    }
            case ActionTypes.SIGNIN_FAILURE:
                        return {
                            ...state ,
                            isSigningIn: false ,
                            signInFailure: {} ,
                            signInFailure: {errorCode: action.payload.errorCode}
                            
                        }

                        case ActionTypes.CONFIRM_CODE_START:
                    return {
                        ...state ,
                        isConfirmation: true
            
                        }
        case ActionTypes.CONFIRM_CODE_SUCCESS:
                    return {
                        ...state ,
                        isConfirmation: false ,
                        confirmCodeSuccess: {}
                    
                        } 
        case ActionTypes.CONFIRM_CODE_FAILURE:
                    return {
                        ...state ,
                        isConfirmation: false ,
                        confirmCodeFailure: {errorCode: action.payload.errorCode}
                            
                                } 

 
      case ActionTypes.ADD_ADDRESSS_SUCCESS :
          return {
                 ...state ,
                 isAddedd: false,
                 addAddressSuccess: {} ,
                                            
          }
          
          case ActionTypes.ADDRESS_SELECTED:
           
            return {
                ...state,
                selectedAddressId: action.payload.addressId,
                   };

      case ActionTypes.GET_ORDER_SUCCESS :
         
          return {
                 ...state ,
                 isOrdered: false,
                 getOrderSuccess: {} ,
                 orders: action.payload.orders   
                                            
          }



      

            default : 
              return state ; 
    }
}

export default authReducers ;