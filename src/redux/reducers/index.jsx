import { combineReducers } from "redux";
import ProductsReducers from "./productsReducers";
import CartReducers from "./cartsReducers";
import TermosReducers from "./termoReducers";

const reducers = combineReducers({
    ProductsReducers,
    CartReducers,
    TermosReducers
})

export default reducers