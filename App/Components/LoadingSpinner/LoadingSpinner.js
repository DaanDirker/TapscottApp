import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { DotIndicator } from "react-native-indicators"

export default class LoadingSpinner extends Component {

  render() {
    return (
      <View style={styles.spinnerContainer}>
        <DotIndicator style={styles.spinner} color="white" count={3} size={8}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  spinner: {
    opacity: 10
  },
  spinnerContainer: {
    height: 100,
    width: 100,
    opacity: 0.9,
    borderRadius: 20,
    backgroundColor: '#525252'
  }
})