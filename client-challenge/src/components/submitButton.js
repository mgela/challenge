/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class SubmitButton extends Component {
checkworking = ()=> {
  console.log('working');
}

  render() {
    return (
      <TouchableOpacity onPress={this.checkworking}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
