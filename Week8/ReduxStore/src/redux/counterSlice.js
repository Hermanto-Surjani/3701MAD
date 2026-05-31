import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
    incByValue: (state, action) => {
      state.value += action.payload;
    },
    decByValue: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { incremented, decremented, incByValue, decByValue } =
  counterSlice.actions;
export const incAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incByValue(amount));
  }, 1000);
};
export const selectCounter = (state) => state.counter.value;
export default counterSlice.reducer;
