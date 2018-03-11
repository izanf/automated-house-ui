import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerReducer } from 'react-router-redux';

import auth from './auth';

const reducers = combineReducers({
  auth,
  router: routerReducer,
});

const middlewares = [thunk, logger];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store
