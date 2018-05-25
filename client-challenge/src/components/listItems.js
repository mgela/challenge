/* @flow */

import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

import { styles } from "./styles";

export default class ListItems extends Component {

  renderItem = ({ item }) => (
    <View style={styles.wordItem}>
      <Text style={styles.wordText} key={item}>
        {item}
      </Text>
    </View>
  );

  render() {
    return (
      <View style={styles.listWrapper}>
        <FlatList
          data={this.props.words}
          extraData={this.state}
          keyExtractor={item => item}
          renderItem={this.renderItem}
          numColumns={6}
        />
      </View>
    );
  }
}
