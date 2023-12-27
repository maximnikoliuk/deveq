import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gptResult: [
    {
      name: "Val10",
      name2: "Val20",
      name3: "Val30",
    },
    {
      name: "Val11",
      name2: "Val21",
      name3: "Val31",
    },
    {
      name: "Val13",
      name2: "Val23",
      name3: "Val33",
    }
  ]
};

export const sliceResult = createSlice({
  name: 'result',
  initialState: initialState,
  reducers: {
    setResult: (state, { payload }) => {
      state.gptResult = payload;
    },
    reset: () => initialState,
  },
});

export const {
  setResult,
} = sliceResult.actions;

export default sliceResult.reducer;