import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DefaultTheme } from 'styled-components/native'
import { darkTheme } from 'theme/theme'

const settingsSlice = createSlice({
  name: 'settings',
  initialState: null,
  reducers: {
    updateAppTheme(state, action: PayloadAction<DefaultTheme>) {
      return action.payload
    },
  },
})

export const { updateAppTheme } = settingsSlice.actions
export default settingsSlice.reducer
