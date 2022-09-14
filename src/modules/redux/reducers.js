import { combineReducers } from 'redux';

import reduxTestSlice from '../reduxTest/redux';

const rootReducer = combineReducers({
  [reduxTestSlice.name]: reduxTestSlice.reducer,
});

export default rootReducer;