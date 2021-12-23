import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import settings from 'store/settingsSlice'
import { wegwijsApi } from './api'

const rootReducer = combineReducers({
  settings,
  [wegwijsApi.reducerPath]: wegwijsApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wegwijsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
