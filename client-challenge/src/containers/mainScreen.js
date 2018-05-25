/* @flow */

import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
//thunk
import { getWords } from "../actions/index";
//components
import NumberInput from "../components/numberInput";
import SubmitButton from "../components/submitButton";
import ListItems from "../components/listItems";
//styles
import { styles } from "./styles";

class MainScreen extends Component {
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
        <ListItems words={this.props.words} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  words: state.wordList.words
});

const mapDispatchToProps = dispatch => ({
  getWords: data => dispatch(getWords(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
