/* @flow */
import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
//thunk
import { getWords } from "../actions/index";
//components
import NumberInput from "../components/numberInput";
import SubmitButton from "../components/submitButton";
import ListItems from "../components/listItems";
import LoaderAnimation from "../components/loader";
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
    //reset input field on submit
    this.setState({number: ''})
  };

  renderLoader = () => {
    if (!this.props.isLoading) return <ListItems words={this.props.words} />;
    return <LoaderAnimation />;
  };

  render() {
    console.log(this.refs);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Coding Challenge</Text>
        <NumberInput  updateState={this.inputState} number={this.state.number}/>
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
