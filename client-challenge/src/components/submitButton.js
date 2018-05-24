/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class SubmitButton extends Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.sendNumber}>
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
