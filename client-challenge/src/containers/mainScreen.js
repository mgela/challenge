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
import LoaderAnimation from "../components/loader"
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

  renderLoader = ()=> {
    if (!this.props.isLoading) return <ListItems words={this.props.words} />
    return <LoaderAnimation/>  
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <NumberInput updateState={this.inputState} />
        <SubmitButton sendNumber={this.generateWords} />
        {this.renderLoader()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  words: state.wordList.words,
  isLoading: state.wordList.isLoading
});

const mapDispatchToProps = dispatch => ({
  getWords: data => dispatch(getWords(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
