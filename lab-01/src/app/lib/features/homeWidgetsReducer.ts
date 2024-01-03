import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface HomeWidgetsState {
  showModal1: boolean
  showModal2: boolean
}

const initialState: HomeWidgetsState = {
  showModal1: false,
  showModal2: false,
}

const homeWidgetsSlice = createSlice({
  name: 'homeWidgets',
  initialState,
  reducers: {
    toggleModal: (state: any, action) => {
      const modalName = action.payload
      state[modalName] = !state[modalName]
    },
  },
})

export const { toggleModal } = homeWidgetsSlice.actions

export default homeWidgetsSlice.reducer
