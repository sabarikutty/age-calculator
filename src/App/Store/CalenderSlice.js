import { createSlice } from '@reduxjs/toolkit'

export const CalenderSlice = createSlice({
  name: 'calender',
  initialState: {
    date: ''
  },
  reducers: {
    setCalenderDate: (state, action) => {
      state.date = action.payload
    }
  }
})

export const { setCalenderDate } = CalenderSlice.actions

export default CalenderSlice.reducer