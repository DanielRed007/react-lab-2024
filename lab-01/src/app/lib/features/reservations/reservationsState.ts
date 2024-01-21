import {
  ILocation,
  IReservation,
  IUser,
  IWorkModality,
} from '../../../utils/interface/interfaces'

export interface ReservationsState {
  user: IUser | null
  locations: ILocation[] | null
  workModalities: IWorkModality[] | null
  reservation: IReservation | null
}

export const initialState: ReservationsState = {
  user: null,
  locations: null,
  workModalities: null,
  reservation: null,
}
