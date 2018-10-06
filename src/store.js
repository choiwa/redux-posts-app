// about store
// https://github.com/reduxjs/redux/blob/master/docs/api/Store.md

// create Store
// https://github.com/reduxjs/redux/blob/master/docs/api/createStore.md

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  )

);

export default store;
