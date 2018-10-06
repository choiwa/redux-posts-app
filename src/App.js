import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
// import Provider from react-redux
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

// about Provider
// https://redux.js.org/basics/usagewithreact

// about store
// https://github.com/reduxjs/redux/blob/master/docs/api/Store.md

// create Store
// https://github.com/reduxjs/redux/blob/master/docs/api/createStore.md
const store = createStore(()=> [], {}, applyMiddleware());
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Postform />
          <hr />
          <Posts />
        </div> 
      </Provider>
    );
  }
}

export default App;
