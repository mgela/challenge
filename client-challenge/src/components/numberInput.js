/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default class NumberInput extends Component {

  //local state for inputfield.

  constructor(props){
    super(props)
    this.state = {
      inputNumber : null
    }
  }
  captureInput = (text)=> {
    this.setState({ inputNumber: text })
  }
  render() {
    return (
      <TextInput
        style={styles.inputField}
        keyboardType='numeric'
        placeholder='Enter your number'
        placeholderTextColor='#1EBAA5'
        onChangeText={this.captureInput}
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
