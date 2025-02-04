import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Correct import style
import { persistStore, persistReducer } from "redux-persist";
import { productListReducer, productReducer } from "./Reducers/Product";

const persistConfig = {
  key: "root",
  storage,
  version: 1, // Version should be a number
};

const rootReducer = combineReducers({ // Pass an object to combineReducers
  productList: productListReducer,  // Give reducers keys! Important!
  product: productReducer,         // Give reducers keys! Important!
});

const persistedReducer = persistReducer(persistConfig, rootReducer); // Correct usage

const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, // or your serialization check configuration
  }),
});

const persistor = persistStore(store);

export { store, persistor };