import { createStore, combineReducers } from "redux";
import ProductsReducer from "./reducers/ProductsReducer";
import CartReducer from "./reducers/CartReducer";
import Logst from "./reducers/Logst";
import { devToolsEnhancer } from "redux-devtools-extension";
const root = combineReducers({
  ProductsReducer,
  CartReducer,
  Logst,
});
const store = createStore(root, devToolsEnhancer());
export default store;
