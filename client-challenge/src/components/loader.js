/* @flow */

import React, { Component } from "react";

import LottieView from "lottie-react-native";

export default class LoaderAnimation extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require("../../assets/animations/animation.json")}
      />
    );
  }
}
