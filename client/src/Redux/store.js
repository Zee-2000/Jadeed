import {combineReducers} from "redux";
import {presistStore, presistReducer} from "redux-persist";
import {version} from "mongoose"
 
const persistConfig = {
    key: 'root',
    storage,
    version:1
  }

  const rootReducer = combineReducers;