import productReducer from './productReducer'
import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer, 
    cart: cartReducer,
    firestore: firestoreReducer
})

export default rootReducer;