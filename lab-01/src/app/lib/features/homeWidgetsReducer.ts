import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface HomeWidgetsState {
  showModal1: boolean
  showModal2: boolean
  showModal3: boolean
  showModal4: boolean
  showModal5: boolean
}

const initialState: HomeWidgetsState = {
  showModal1: false,
  showModal2: false,
  showModal3: false,
  showModal4: false,
  showModal5: false,
}

const homeWidgetsSlice = createSlice({
  name: 'homeWidgets',
  initialState,
  reducers: {
    toggleModal: (state: any, action) => {
      const modalName = action.payload
      state[modalName] = !state[modalName]
    },
    openModal: (state: any, action) => {
      const modalName = action.payload
      state[modalName] = true
    },
    closeModal: (state: any, action) => {
      const modalName = action.payload
      state[modalName] = false
    },
  },
})

export const { toggleModal, openModal, closeModal } = homeWidgetsSlice.actions

export default homeWidgetsSlice.reducer
