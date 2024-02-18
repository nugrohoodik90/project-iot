import { createStore ,applyMiddleware,compose} from "redux";
import reducers from "./reducers";
import thunk  from "redux-thunk";

const store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk),
      // redux toolkit just for dev, if not not include
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
export default store
