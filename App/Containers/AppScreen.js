import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from '../Stylesheets/AppStylesheet'

export default class AppScreen extends Component {

  componentDidMount() {
    console.log("Component mount")

    this.setState(previousState => {
      //Change state example
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.helloWorld}>Hello, world!</Text>
      </View>
    )
  }
}
