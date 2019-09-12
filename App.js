import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class App extends Component {

  componentDidMount() {
    console.log("Component did mount")
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    )
  }
}