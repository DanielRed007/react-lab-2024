import { configureStore } from '@reduxjs/toolkit'
import testReducer from './features/testReducer'

export const makeStore = () => {
  return configureStore({
    reducer: {
      test: testReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
