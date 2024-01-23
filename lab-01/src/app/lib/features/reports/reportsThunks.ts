import { reportLabels, reportsData } from '../../../utils/data/mock-data'
import { FetchReportsTablePayload } from './reportsInterfaces'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchDataTable = createAsyncThunk<FetchReportsTablePayload>(
  'reports/fetch',
  async () => {
    const labels = reportLabels
    const data = reportsData
    return { labels, data }
  },
)
