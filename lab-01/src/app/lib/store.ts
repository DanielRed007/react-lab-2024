import reservationsReducer from './features/reservations/reservationsReducer'
import homeWidgetsReducer from './features/homeWidgets/homeWidgetsReducer'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      homeWidgets: homeWidgetsReducer,
      reservations: reservationsReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
