import {
  FetchUserPayload,
  FetchLocationsPayload,
  FetchWorkModalitiesPayload,
  SendReservationPayload,
} from './reservationsInterfaces'
import { user, locations, workModalities } from '../../../utils/data/mock-data'
import { createAsyncThunk } from '@reduxjs/toolkit'

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

export const fetchWorkModalities = createAsyncThunk<FetchWorkModalitiesPayload>(
  'workModalities/fetch',
  async () => {
    return { workModalities }
  },
)

export const sendReservation = createAsyncThunk<SendReservationPayload, any>(
  'reservations/sendReservation',
  async (reservation) => {
    return { reservation }
  },
)
