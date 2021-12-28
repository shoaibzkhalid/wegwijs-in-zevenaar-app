import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const general = createSlice({
  name: 'general',
  initialState: {
    drawerStatus: null,
  },
  reducers: {
    setDrawer(state, action: PayloadAction<boolean>) {
      state.drawerStatus = action.payload
    },
  },
})

export const { setDrawer } = general.actions
export default general.reducer
