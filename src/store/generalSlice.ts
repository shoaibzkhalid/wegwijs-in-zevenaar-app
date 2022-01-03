import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const general = createSlice({
  name: 'general',
  initialState: {
    drawerStatus: null,
    currentPage: 1,
  },
  reducers: {
    setDrawer(state, action: PayloadAction<boolean>) {
      state.drawerStatus = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
  },
})

export const { setDrawer, setCurrentPage } = general.actions
export default general.reducer
