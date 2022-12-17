
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import AuthReducer from './auth'
import userReducer from './userData'

const persistConfig = {
  key: "root",
  storage
}

const reducer = combineReducers({
  Auth: AuthReducer,
  user: userReducer
})

const persistedReducer = persistReducer(persistConfig,reducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)
 
export default store