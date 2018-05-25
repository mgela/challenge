/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


import LottieView from 'lottie-react-native';


export default class LoaderAnimation extends Component {

  componentDidMount (){
    this.animation.play();
    this.animation.play(30, 120);
  }

  render() {
    return (
      <LottieView
      ref={animation => {
        this.animation = animation;
      }}
      source={require('../../assets/animations/animation.json')}
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
