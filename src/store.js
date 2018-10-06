// about store
// https://github.com/reduxjs/redux/blob/master/docs/api/Store.md

// create Store
// https://github.com/reduxjs/redux/blob/master/docs/api/createStore.md

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;
