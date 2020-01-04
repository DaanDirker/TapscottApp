import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from 'react-redux'
import Graph from '../../Components/TransactionGraph/TransactionGraph'

import styles from './AchievementsContainerStyles'

class AchievementsContainer extends Component {

  render() {
    return (
      <View style={styles.achievementsContainer}>
        <View style={styles.aboutContainer}>
          <Text style={[styles.heading, styles.headingMargin]}>About us</Text>
          <Text style={[styles.text, styles.aboutText]}>
            Tapscott was founded in 2018 by a Dutch group of blockchain students. 
            Their goal was to help the environment by cleaning the ocean. Every dollar equals ten less kilo’s 
            of plastic floating in the ocean. Every donation and expenditure 
            will be logged and can be seen on the blockchain.
          </Text>
        </View>
        <View style={styles.graphContainer}>
          <Text style={[styles.heading, styles.headingMargin]}>Achievements</Text>
          {/* TODO: FETCH NUMBERS */}
          <Graph
            transportation={756}
            labor={420}
            fishingnets={66}
            boatrental={120}
            bank={344}/>
        </View>
        <View style={styles.graphDetailContainer}>
          <Text>Details here</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect()(AchievementsContainer)
