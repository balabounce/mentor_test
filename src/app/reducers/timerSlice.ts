
import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    seconds: 0
  },
  reducers: {
    setTime: (state, action) => {
      state.seconds = action.payload;
    },
    incrementTime: (state) => {
      state.seconds += 1;
    }
  }
});

export const {setTime, incrementTime} = timerSlice.actions;

export default timerSlice.reducer;