/* @flow */

import React, { Component } from "react";
import { TextInput } from "react-native";

import { styles } from "./styles";

export default class NumberInput extends Component {
  render() {
    console.log(this.props);
    return (
      <TextInput
        style={styles.inputField}
        keyboardType="numeric"
        placeholder="Enter your number"
        placeholderTextColor="#1EBAA5"
        onChangeText={this.props.updateState}
        value={this.props.number}
      />
    );
  }
}
