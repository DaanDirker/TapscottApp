import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from 'react-redux'

class AchievementsContainer extends Component {

  render() {
    return (
      <View>
        <Text>AchievementsContainer</Text>
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
