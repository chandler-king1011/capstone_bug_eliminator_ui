import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from "./user";
import bugReducer from './bug';
import commentReducer from './comment';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userReducer']
}

const rootReducer = combineReducers({
  userReducer,
  bugReducer,
  commentReducer,
});

export default persistReducer(persistConfig, rootReducer);