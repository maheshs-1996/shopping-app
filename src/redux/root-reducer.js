import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import cartReducer from './cart/cart-reducer'
import { directoryReducer} from './data/data-reducer'
import shopReducer from './shop/shop-reducer'


export default combineReducers({
    user : userReducer,
    cart : cartReducer,
    directory : directoryReducer,
    shop : shopReducer
})