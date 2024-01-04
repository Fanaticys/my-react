import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { someMiddleware2, someMiddleware, api } from './middlewares';
import { withExtraArgument } from 'redux-thunk'

import reducers from './reducers';

const logger = createLogger({
  collapsed: true
});

const enhance = applyMiddleware(withExtraArgument({ api: fetch, someValue: 2 }), logger, api);
const composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const store = createStore(reducers, composeEnhancers(enhance));
// store['@@observable']()

export default store;