import React, { Component } from 'react'
import { View, ScrollView, Dimensions, Text } from 'react-native'
import { connect } from 'react-redux'
import { navigateTo } from '../../Redux/actions/BottomNavActions'
import { BOTTOM_NAV_ACHIEVEMENTS, BOTTOM_NAV_DONATION } from '../../Utils/Constants'

import DonationContainer from "../DonationContainer/DonationContainer"
import AchievementsContainer from '../AchievementsContainer/AchievementsContainer'

import ScaledImage from '../../Components/ScaledImage/ScaledImage'
import BoeiButton from '../../Components/BoeiButton/BoeiButton'
import BottomNavigation from "../../Components/BottomNavigation/BottomNavigation"

import { fetchSumDonations } from '../../Redux/actions/SumActions'

import styles from './HomeContainerStyles'

const screenWidth = Math.round(Dimensions.get('window').width)
const scrollSpeed = 4000

class HomeContainer extends Component {

  componentDidMount() {
    //Fetch total donation amount
    this.props.fetchSumDonations()
  }

  handleBottomNav() {
    switch(this.props.currentNav) {
      case BOTTOM_NAV_ACHIEVEMENTS:
        return <AchievementsContainer/>
      case BOTTOM_NAV_DONATION:
        return <DonationContainer navigation={this.props.navigation}/>
    }
  }

  navigateTo(nav) {
    this.props.navigateTo(nav)
  }

  render() {
    scrollToBottom = () => {
      this.scrollView.scrollToEnd({ duration: scrollSpeed })
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
                <Text id="SumDonations" style={styles.heading}>${this.props.totalSum}</Text>
                <Text style={styles.subtitle}>Raised since January 1999</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'flex-end', alignSelf: 'center', marginBottom: 960 }}>
                <BoeiButton style={styles.boeiButton} onPress={() => scrollToBottom()} />
              </View>
            </View>
          </ScaledImage>
        </View>
        <View style={styles.seaContainer, styles.backgroundWaves}>
          <ScaledImage
            source={require('../../Assets/images/Sea.png')}
            width={screenWidth} />
          {/* <Waves here /> */}
        </View>

        <View style={styles.sandContainer}>
          <View style={styles.donationContainer}>
            {this.handleBottomNav()}
          </View>
          <View>
            <BottomNavigation 
              currentNav={this.props.currentNav}
              onPressDonate={() => this.navigateTo(BOTTOM_NAV_DONATION)}
              onPressAchievements={() => this.navigateTo(BOTTOM_NAV_ACHIEVEMENTS)}/>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentNav: state.bottomNav.currentBottomNav,
    totalSum: state.sum.totalSum
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSumDonations: () => dispatch(fetchSumDonations()),
    navigateTo: (nav) => dispatch(navigateTo(nav))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
