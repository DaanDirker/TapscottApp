import React, { Component } from "react"
import { View, TouchableOpacity, Dimensions, Image } from "react-native"

const screenWidth = Math.round(Dimensions.get('window').width)

export default class InputField extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.onPress}>
          <Image source={require('../../Assets/images/Boei.png')}
            resizeMode='cover'
            style={this.props.style}/>
        </TouchableOpacity>
      </View>
    )
  }
}
