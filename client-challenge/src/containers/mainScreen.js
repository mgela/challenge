/* @flow */

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import NumberInput from "../components/numberInput";
import SubmitButton from "../components/submitButton";
import { getWords } from "../actions/index";

class MainScreen extends Component {
  //local state for small input component,
  //keeping it in parent as submitButton and input are siblings.
  constructor(props) {
    super(props);
    this.state = {
      number: null
    };
  }

  inputState = number => {
    this.setState({ number: number });
  };

  generateWords = () => {
    this.props.getWords(this.state);
  };

  render() {
    return (
      <View style={styles.container}>
        <NumberInput updateState={this.inputState} />
        <SubmitButton sendNumber={this.generateWords} />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  numberToPhoneWords: state.convertNumber
});

const mapDispatchToProps = dispatch => ({
  getWords: (data) => dispatch(getWords(data))
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1EBAA5",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
