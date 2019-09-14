import { AppRegistry } from 'react-native'
import { name as appName } from './App/Config/app.json'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './App/Containers/HomeScreen'
import TransactionScreen from './App/Containers/TransactionScreen'

const Navigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Transaction: { screen: TransactionScreen }
})

const App =  createAppContainer(Navigator)

AppRegistry.registerComponent(appName, () => App)
