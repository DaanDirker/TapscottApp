import React, { Component } from "react"
import { View, TextInput } from "react-native"
import styles from "./InputFieldStyles"

export default class InputField extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <View style={[styles.container, this.props.backgroundStyles]}>
          <TextInput
            onFocus={this.props.onFocus}
            textAlign={'center'}
            onChangeText={this.props.onChangeText}
            placeholder={this.props.placeholder}
            style={[styles.input, this.props.inputStyles]}
            underlineColorAndroid='transparent'
            keyboardType={this.props.type}/>
        </View>
      </View>
    )
  }
}
