import { combineReducers } from "redux";
import ProductsReducers from "./productsReducers";
import TermosReducers from "./termoReducers";

const reducers = combineReducers({
    ProductsReducers,
    TermosReducers
})

export default reducers