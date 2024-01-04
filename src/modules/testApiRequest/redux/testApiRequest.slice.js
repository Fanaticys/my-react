import { createSlice } from '@reduxjs/toolkit';
import { apiRequest } from '../../redux/actions';

const testApiRequestSlice = createSlice({
  name: 'testApiRequest',
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    apiRequestSuccess: (state, { payload }) => {
      state.data = payload;
    },
    apiRequestError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const apiRequestPosts = () => (dispatch, getState, extra) => {
  console.log({ extra, store: getState() });

  return dispatch(apiRequest({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    onSuccess: testApiRequestSlice.actions.apiRequestSuccess,
    onError: testApiRequestSlice.actions.apiRequestError,
  }));
};

export default testApiRequestSlice;