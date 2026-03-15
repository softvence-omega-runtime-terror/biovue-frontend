import { baseApi } from '../features/api/baseApi'
import { projectionApi } from '../features/api/userDashboard/Projection/projectionApi'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/slice/authSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      [projectionApi.reducerPath]: projectionApi.reducer,
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware, projectionApi.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']