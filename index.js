import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from './App/Config/app.json'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from 'react-redux'

import HomeScreen from './App/Containers/HomeContainer/HomeContainer'
import WebviewContainer from './App/Containers/WebviewContainer/WebviewContainer'

const ScreensContainer = createAppContainer(
  createStackNavigator({
    Home: { screen: HomeScreen },
    Webview: { screen: WebviewContainer },  
  }, {
    headerMode: 'none'
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
