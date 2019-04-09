import React, { Component } from 'react';
import './App.scss';
import Index from './xo-game/Index';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import redusers from './xo-game/reducers';

const store = createStore(redusers);

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Index />
      </Provider>
    );
  }
}

export default App;
