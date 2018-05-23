import React from 'react';

import  { Provider }  from 'react-redux'

import store from './src/store'

import MainScreen from './src/containers/mainScreen'
import { Font } from 'expo';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <MainScreen/>
      </Provider>
    );
  }
}
