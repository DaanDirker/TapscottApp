import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import styles from '../Stylesheets/AppStylesheet'

export default class HomeScreen extends Component {
  
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    console.log("Component mount")

    this.setState(previousState => {
      //Change state example
    })
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.helloWorld}>Home Screen!</Text>
        <Button title="Make Transaction" onPress={() => navigate("Transaction")}/>
      </View>
    )
  }
}
