import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from './App/Config/app.json'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from 'react-redux'

import HomeScreen from './App/Containers/HomeScreen'
import TransactionScreen from './App/Containers/TransactionScreen'
import CryptoContainer from './App/Containers/CryptoContainer'

const ScreensContainer = createAppContainer(
  createStackNavigator({
    Crypto: { screen: CryptoContainer },
    Home: { screen: HomeScreen },
    Transaction: { screen: TransactionScreen }
  })
)

import Store from './App/Redux/Store'

class App extends Component {
  render() {
    return(
      <Provider store={Store}>
        <ScreensContainer/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent(appName, () => App)
