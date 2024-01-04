import { combineReducers } from 'redux';

import reduxTestSlice from '../reduxTest/redux';
import testApiRequestSlice from '../testApiRequest/redux';

const rootReducer = combineReducers({
  [reduxTestSlice.name]: reduxTestSlice.reducer,
  [testApiRequestSlice.name]: testApiRequestSlice.reducer,
});

export default rootReducer;