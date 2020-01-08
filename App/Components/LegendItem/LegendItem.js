import React, { Component } from "react"
import { View, Text } from "react-native"

import styles from "./LegendItemStyles"

export default class LegendItem extends Component {

  render() {
    return (
      <View style={[styles.rootContainer, this.props.legendStyles]}>
        <View style={styles.leftArea}>
            <View style={[styles.square, {backgroundColor: this.props.squareColor}]}/>
            <Text style={styles.baseFont}>{this.props.title}</Text>
        </View>
        <View style={styles.rightArea}>
            <Text style={styles.baseFont}>{this.props.amount}</Text>
        </View>
      </View>
    )
  }
}
