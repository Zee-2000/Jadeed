import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { productListReducer, productReducer } from "./Reducers/Product";
import { thunk } from "redux-thunk";
import {storage} from "redux-persist/lib/storage"
const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  productListReducer,
  productReducer
});

const middleware = { thunk };
const persistedStore = persistReducer(persistConfig, rootReducer);

const store = createStore(persistReducer, applyMiddleware(thunk));
let persister = persistedStore(store);
export {store, persister}