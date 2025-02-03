import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { productListReducer, productReducer } from "./Reducers/Product";
import { thunk } from "redux-thunk";
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  productListReducer,
  productReducer
});

const middleware = { thunk };
const persistedStore = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistReducer, applyMiddleware(thunk));
export let persister = persistedStore(store);