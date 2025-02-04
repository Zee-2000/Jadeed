import { combineReducers } from "redux";
import {storage} from "redux-persist/lib/storage";
import {persistStore, persistReducer} from "redux-persist";
import { version } from "react";
const persistConfig = {
  key : "root",
  storage,
  version : "1.0"
}

const rootReducer = combineReducers