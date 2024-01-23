import { ILabel } from '../../../utils/interface/interfaces'

export interface ReportsState {
  dataTable: {
    labels: ILabel[]
    data: any[]
  } | null
}

export const initialState: ReportsState = {
  dataTable: null,
}
