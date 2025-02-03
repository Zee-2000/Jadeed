import {combineReducers} from "redux";
import {presistStore, presistReducer} from "redux-persist";
import { ProductListReducer, ProductReducer } from "./Reducers/Product";
 
const persistConfig = {
    key: 'root',
    storage,
    version:1
  }

  const rootReducer = combineReducers({
    ProductListReducer,
    ProductReducer
  }); 

  const presistReducer = presistReducer(persistConfig, rootReducer);

  export const store = createStore(presistReducer);
  export let presister = presistStore(store);