import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { BOTTOM_NAV_ACHIEVEMENTS, BOTTOM_NAV_DONATION } from '../../Utils/Constants'

import styles from "../BottomNavigation/BottomNavigationStyles"

export default class BottomNavigation extends Component {

  donationSelected = () => this.props.currentNav == BOTTOM_NAV_DONATION
  achievementsSelected = () => this.props.currentNav == BOTTOM_NAV_ACHIEVEMENTS

  render() {
    return (
      <View style={styles.navContainer}>
          <TouchableOpacity style={[styles.opacityContainer, 
            this.donationSelected() ? styles.selOpacityContainer : null]} 
            onPress={this.props.onPressDonate}
            disabled={this.donationSelected()}>
              <Text style={styles.text}>Donate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.opacityContainer, 
            this.achievementsSelected() ? styles.selOpacityContainer : null]} 
            onPress={this.props.onPressAchievements}
            disabled={this.achievementsSelected()}>
              <Text style={styles.text}>Achievements</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
