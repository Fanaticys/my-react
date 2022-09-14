import { get } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const reduxTestSlice = createSlice({
  name: 'reduxTest',
  initialState: {
    counter1: 0,
    counter2: 0
  },
  reducers: {
    increment: (state, { payload }) => {
      const { propName } = payload;
      const currentState = get(state, propName) || 0;
      state[propName] = currentState + 1;
    },
  },
  // "builder callback API", recommended for TypeScript users
  // extraReducers: (builder) => {
  //   builder.addCase(incrementBy, (state, action) => {
  //     return state + action.payload
  //   })
  //   builder.addCase(decrementBy, (state, action) => {
  //     return state - action.payload
  //   })
  // },
})

export default reduxTestSlice;