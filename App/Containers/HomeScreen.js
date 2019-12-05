import React, { Component } from 'react'
import { View, ScrollView, Dimensions, ImageBackground, Button } from 'react-native'
import ScaledImage from '../Components/ScaledImage'
import Waves from '../Components/Waves'

import styles from '../Stylesheets/HomeStylesheet'

const screenWidth = Math.round(Dimensions.get('window').width)

export default class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation

    scrollToBottom = () => {
      this.scrollView.scrollToEnd({duration: 500})
    }

    return (
      <ScrollView style={styles.scrollContainer}
        ref={ref => this.scrollView = ref}>

        <View style={styles.skyContainer}>
          <Button
            title="Press me"
            onPress={() => scrollToBottom()}
          />
          <ScaledImage
            source={require('../Assets/images/Sky.png')}
            width={screenWidth} />
        </View>

        <View style={styles.seaContainer, styles.backgroundWaves}>
          <ScaledImage
            source={require('../Assets/images/Sea.png')}
            width={screenWidth} />
          {/* <Waves /> */}
        </View>

        <View style={styles.sandContainer}>
          {
            //Contains switching of tabs using state and subscription
          }
        </View>
      </ScrollView>
    )
  }
}
