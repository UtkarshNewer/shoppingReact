import middlewares from "./middlewares/middlewares";
import RootReducer from "./reducers/RootReducer";
import {createStore} from "redux";


const store=createStore(RootReducer,middlewares);
export default store;