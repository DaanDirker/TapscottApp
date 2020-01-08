import React, { Component } from "react"
import { View, Dimensions, ImageBackground } from "react-native"
import ScaledImage from '../Components/ScaledImage/ScaledImage'

const screenWidth = Math.round(Dimensions.get('window').width)

export default class Waves extends Component {
  render() {
    return (
      <ImageBackground style={{width: '100%', height: '100%'}}>
        <ScaledImage
            source={require('../Assets/images/Wave3.png')}
            width={screenWidth} />
        <ScaledImage
            source={require('../Assets/images/Wave2.png')}
            width={screenWidth} />
        <ScaledImage
            source={require('../Assets/images/Wave1.png')}
            width={screenWidth} />
      </ImageBackground>
    )
  }
}
