import React, { Component } from "react"
import { View, Text } from "react-native"

import styles from './PaymentBoxStyles'

export default class PaymentBox extends Component {

  render() {
    return (
      <View style={this.props.paymentStyle}>
        <View style={[styles.line, { backgroundColor: this.props.lineColor }]}/>
        <View style={styles.boxContainer}>
          <View style={styles.leftArea}>
            <View>
              <Text style={styles.baseFont}>{this.props.title}</Text>
            </View>
            <View>
              <Text style={styles.dateFont}>{this.props.date}</Text>
            </View>
          </View>
          <View style={styles.rightArea}>
            <Text style={styles.baseFont}>{this.props.amount}</Text>
          </View>
        </View>
      </View>
    )
  }
}
