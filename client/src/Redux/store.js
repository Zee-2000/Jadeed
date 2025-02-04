import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {storage} from "redux-persist/lib/storage";
import {persistStore, persistReducer} from "redux-persist";
import { version } from "react";
import { productListReducer, productReducer } from "./Reducers/Product";
const persistConfig = {
  key : "root",
  storage,
  version : "1.0"
}

const rootReducer = combineReducers(
  productListReducer,
  productReducer
);

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore(persistedReducer);
export let persistor = persistStore(store);