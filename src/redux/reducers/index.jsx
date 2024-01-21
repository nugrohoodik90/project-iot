import { combineReducers } from "redux";
import ProductsReducers from "./productsReducers";
import CartReducers from "./cartsReducers";

const reducers = combineReducers({
    ProductsReducers,
    CartReducers
})

export default reducers