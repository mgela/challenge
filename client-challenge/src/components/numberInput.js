/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default class NumberInput extends Component {

  render() {
    return (
      <TextInput
        style={styles.inputField}
        keyboardType='numeric'
        placeholder='Enter your number'
        placeholderTextColor='#1EBAA5'
        onChangeText={this.props.updateState}
      />
    );
  }
}

const styles = StyleSheet.create({
  inputField: {
    height: 40,
    width: "95%",
    backgroundColor: "#fff"
  }
});
