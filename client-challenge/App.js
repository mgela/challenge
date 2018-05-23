import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import  { Provider, connect }  from 'react-redux'

import store from './src/store'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>hello</Text>
        </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
