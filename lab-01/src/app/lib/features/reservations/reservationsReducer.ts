import {
  FetchUserPayload,
  FetchLocationsPayload,
  FetchWorkModalitiesPayload,
  SendReservationPayload,
} from './reservationsInterfaces'
import {
  fetchLocations,
  fetchUser,
  fetchWorkModalities,
  sendReservation,
} from './reservationsThunks'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './reservationsState'

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<string>) => {
      const modalName = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchUser.fulfilled,
        (state, action: PayloadAction<FetchUserPayload>) => {
          state.user = action.payload.user
        },
      )
      .addCase(
        fetchLocations.fulfilled,
        (state, action: PayloadAction<FetchLocationsPayload>) => {
          state.locations = action.payload.locations
        },
      )
      .addCase(
        fetchWorkModalities.fulfilled,
        (state, action: PayloadAction<FetchWorkModalitiesPayload>) => {
          state.workModalities = action.payload.workModalities
        },
      )
      .addCase(
        sendReservation.fulfilled,
        (state, action: PayloadAction<SendReservationPayload>) => {
          console.log('Reservation sent:', action.payload.reservation)
        },
      )
  },
})

export const { toggleModal } = reservationsSlice.actions

export default reservationsSlice.reducer
