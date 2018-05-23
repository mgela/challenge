/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import NumberInput from "../components/numberInput";
import SubmitButton from '../components/submitButton'



export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NumberInput/>
        <SubmitButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1EBAA5",
    alignItems: "center",
    justifyContent: "center"
  }
});
