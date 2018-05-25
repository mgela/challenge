/* @flow */

import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import {styles} from './styles'

export default class SubmitButton extends Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.sendNumber} style={styles.buttonWrapper}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    );
  }
}
