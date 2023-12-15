import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './auth/authApi'
import userReducer from './Slice'
import { productApi } from './product/productApi'



export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      productApi.middleware
    ]),
})