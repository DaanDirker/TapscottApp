import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from '../Stylesheets/AppStylesheet'

export default class TransactionScreen extends Component {

  static navigationOptions = { title: 'Transaction' }

  componentDidMount() {
    console.log("Component mount")
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.helloWorld}>Transaction Screen!</Text>
      </View>
    )
  }
}
