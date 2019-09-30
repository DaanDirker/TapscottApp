import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from './App/Config/app.json'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import reducers from './App/Redux/reducers'
import {  createStore } from 'redux'
import { Provider } from 'react-redux'

import HomeScreen from './App/Containers/HomeScreen'
import TransactionScreen from './App/Containers/TransactionScreen'

const ScreensContainer = createAppContainer(
  createStackNavigator({
    Home: { screen: HomeScreen },
    Transaction: { screen: TransactionScreen }
  })
)

let store = createStore(reducers) 

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <ScreensContainer/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent(appName, () => App)
