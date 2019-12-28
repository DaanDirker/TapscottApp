import React, { Component } from 'react'
import { View, ScrollView, Dimensions, Text } from 'react-native'
import ScaledImage from '../../Components/ScaledImage'
import DonationContainer from "../DonationContainer/DonationContainer"
import BoeiButton from '../../Components/BoeiButton/BoeiButton'

import styles from './HomeContainerStyles'

const screenWidth = Math.round(Dimensions.get('window').width)

export default class HomeContainer extends Component {
  render() {
    scrollToBottom = () => {
      this.scrollView.scrollToEnd({duration: 4000})
    }

    return (
      <ScrollView ref={ref => this.scrollView = ref}>
        <View style={styles.skyBackground}>
          <ScaledImage
            source={require('../../Assets/images/Sky.png')}
            width={screenWidth}>
              <View style={styles.skyContent}>
                <View style={styles.headingContainer}>
                  <Text style={[styles.heading, {marginBottom: 8}]}>TAPSCOTT</Text>
                  <Text style={styles.subtitle}>Save the ocean through Blockchain!</Text>
                </View>
                <View style={styles.totalAmountContainer}>
                  <Text style={styles.heading}>$21.680</Text>
                  <Text style={styles.subtitle}>Raised since January 1999</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end', alignSelf: 'center', marginBottom: 1080}}>
                  <BoeiButton style={styles.boeiButton} onPress={() => scrollToBottom()}/>
                </View>
              </View>
            </ScaledImage>
        </View>
        <View style={styles.seaContainer, styles.backgroundWaves}>
          <ScaledImage
            source={require('../../Assets/images/Sea.png')}
            width={screenWidth} />
          {/* <Waves /> */}
        </View>

        <View style={styles.sandContainer}>
          <View style={styles.donationContainer}>
              <DonationContainer navigation={this.props.navigation}/>
          </View>
        </View>
      </ScrollView>
    )
  }
}
