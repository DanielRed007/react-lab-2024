import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { ILocation, IUser } from '../../utils/interface/interfaces'
import { locations, user } from '../../utils/data/mock-data'

interface ReservationsState {
  user: IUser | null
  locations: ILocation[] | null
}

interface FetchUserPayload {
  user: IUser
}

interface FetchLocationsPayload {
  locations: ILocation[]
}

interface SendReservationPayload {
  reservation: any
}

const initialState: ReservationsState = {
  user: null,
  locations: null,
}

export const fetchUser = createAsyncThunk<FetchUserPayload>(
  'user/fetch',
  async () => {
    return { user }
  },
)

export const fetchLocations = createAsyncThunk<FetchLocationsPayload>(
  'locations/fetch',
  async () => {
    return { locations }
  },
)

export const sendReservation = createAsyncThunk<SendReservationPayload, any>(
  'reservations/sendReservation',
  async (reservation) => {
    return { reservation }
  },
)

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
        sendReservation.fulfilled,
        (state, action: PayloadAction<SendReservationPayload>) => {
          console.log('Reservation sent:', action.payload.reservation)
        },
      )
  },
})

export const { toggleModal } = reservationsSlice.actions

export default reservationsSlice.reducer
