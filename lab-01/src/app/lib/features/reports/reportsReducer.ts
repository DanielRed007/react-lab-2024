import { FetchReportsTablePayload } from './reportsInterfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchDataTable } from './reportsThunks'
import { initialState } from './reportsState'

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  extraReducers(builder) {
    builder.addCase(
      fetchDataTable.fulfilled,
      (state, action: PayloadAction<FetchReportsTablePayload>) => {
        state.dataTable = {
          labels: action.payload.labels,
          data: action.payload.data,
        }
      },
    )
  },
  reducers: {},
})

export default reportsSlice.reducer
