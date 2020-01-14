import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from "./user";
import bugReducer from './bug';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userReducer']
}

const rootReducer = combineReducers({
  userReducer,
  bugReducer
});

export default persistReducer(persistConfig, rootReducer);