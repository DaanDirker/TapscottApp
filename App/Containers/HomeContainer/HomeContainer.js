import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, Dimensions, Text } from 'react-native'
import ScaledImage from '../../Components/ScaledImage'
import DonationContainer from "../DonationContainer/DonationContainer"
import BoeiButton from '../../Components/BoeiButton/BoeiButton'
import { fetchSumDonations } from '../../Redux/actions/SumActions'

import styles from './HomeContainerStyles'

const screenWidth = Math.round(Dimensions.get('window').width)

class HomeContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      donationAmount = 0
    }
  }

  async setSumDonation() {
    //Testing code part for Sum number of donations
    await this.props.fetchSumDonations()
      .then((response) => document.getElementById('SumDonations') = response.data)
      .catch(err => {
        console.log('ERROR', err)
      });
    return "500";
  }

  render() {
    scrollToBottom = () => {
      this.scrollView.scrollToEnd({ duration: 4000 })
    }

    return (
      <ScrollView ref={ref => this.scrollView = ref}>
        <View style={styles.skyBackground}>
          <ScaledImage
            source={require('../../Assets/images/Sky.png')}
            width={screenWidth}>
            <View style={styles.skyContent}>
              <View style={styles.headingContainer}>
                <Text style={[styles.heading, { marginBottom: 8 }]}>TAPSCOTT</Text>
                <Text style={styles.subtitle}>Save the ocean through Blockchain!</Text>
              </View>
              <View style={styles.totalAmountContainer}>
                <Text id="SumDonations" style={styles.heading}>$21.680 {this.props.totalSum}</Text>
                <Text style={styles.subtitle}>Raised since January 1999</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'flex-end', alignSelf: 'center', marginBottom: 1080 }}>
                <BoeiButton style={styles.boeiButton} onPress={() => scrollToBottom()} />
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
            <DonationContainer navigation={this.props.navigation} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    totalSum: state.sum.totalSum
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSumDonations: () => dispatch(fetchSumDonations()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)