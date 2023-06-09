import {combineReducers} from 'redux';
import authReducers from './authReducers';
import HomeReducer from './HomeReducer';
import cartReducer from './cartReducer';
import {CLEAR_REDUX_DATA} from '../actions/ActionTypes';
import searchReducer from './searchReducer';



const rootReducer = combineReducers({
  auth: authReducers,
  home: HomeReducer,
  cart: cartReducer,
  search: searchReducer
});


const appReducer = (state, action) => {
    if (action.type === CLEAR_REDUX_DATA) {
      return rootReducer(undefined, action);
    }
  
    return rootReducer(state, action);
  };
  
  export default appReducer;