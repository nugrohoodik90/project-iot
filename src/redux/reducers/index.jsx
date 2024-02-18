import { combineReducers } from "redux";
import ProductsReducers from "./productsReducers";
import TermosReducers from "./termoReducers";
import RelaysReducers from "./relaysReducers";

const reducers = combineReducers({
    ProductsReducers,
    TermosReducers,
    RelaysReducers
})

export default reducers