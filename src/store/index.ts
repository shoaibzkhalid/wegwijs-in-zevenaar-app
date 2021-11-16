import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import settings from 'store/settingsSlice'
import { generalApi } from './api/auth'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import purgeStoredState from 'redux-persist/es/purgeStoredState'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['general', 'favorites'],
}

const rootReducer = combineReducers({
  settings,
  [generalApi.reducerPath]: generalApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: {
        warnAfter: 500,
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        warnAfter: 500,
      },
    }).concat(generalApi.middleware),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// persistor.purge()
