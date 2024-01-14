import {
  ILocation,
  IUser,
  IWorkModality,
} from '../../../utils/interface/interfaces'

export interface ReservationsState {
  user: IUser | null
  locations: ILocation[] | null
  workModalities: IWorkModality[] | null
}

export const initialState: ReservationsState = {
  user: null,
  locations: null,
  workModalities: null,
}
