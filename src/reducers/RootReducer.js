import {combineReducers} from "redux"
import CartReducer from "./CartReducer";
import ErrorReducer from "./ErrorReducer";
import OrderReducer from "./OrderReducer";
import ProductReducer from "./ProductReducer";
import ReviewsReducer from "./ReviewsReducer";
import FinalInfoReducer from './FinalInfoReducer'

const RootReducer=combineReducers({
    productReducer:ProductReducer,
    reviewReducer:ReviewsReducer,
    cartReducer:CartReducer,
    errorReducer:ErrorReducer,
    orderReducer:OrderReducer,
    finalInfoReducer:FinalInfoReducer,
})
export default RootReducer;