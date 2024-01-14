import {
  IUser,
  ILocation,
  IWorkModality,
} from '../../../utils/interface/interfaces'

export interface FetchUserPayload {
  user: IUser
}

export interface FetchLocationsPayload {
  locations: ILocation[]
}

export interface FetchWorkModalitiesPayload {
  workModalities: IWorkModality[]
}

export interface SendReservationPayload {
  reservation: any
}
