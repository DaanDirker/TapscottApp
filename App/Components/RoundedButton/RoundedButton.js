import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import styles from "./RoundedButtonStyles"

export default class RoundedButton extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={[styles.button, this.props.style]} 
        onPress={this.props.onPress}
        disabled={this.props.isDisabled}>
          <Text style={[styles.text, this.props.textStyle]}>{this.props.amount + this.props.currency}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
