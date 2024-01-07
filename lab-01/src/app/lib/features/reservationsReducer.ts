import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { ILocation, IUser } from '@/app/utils/interface/interfaces'

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

const initialState: ReservationsState = {
  user: null,
  locations: null,
}

export const fetchUser = createAsyncThunk<FetchUserPayload>(
  'user/fetch',
  async () => {
    const user: IUser = {
      name: 'Septimus',
      username: 'Gladius',
      email: 'septimus.scipium@aterna.com',
    }
    return { user }
  },
)

export const fetchLocations = createAsyncThunk<FetchLocationsPayload>(
  'locations/fetch',
  async () => {
    const locations: ILocation[] = [
      {
        name: 'Palatinum',
        city: 'Roma',
        active: true,
      },
      {
        name: 'Agora',
        city: 'Atenas',
        active: true,
      },
    ]
    return { locations }
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
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload.user
      })
      .addCase(
        fetchLocations.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.locations = action.payload.locations
        },
      )
  },
})

export const { toggleModal } = reservationsSlice.actions

export default reservationsSlice.reducer
