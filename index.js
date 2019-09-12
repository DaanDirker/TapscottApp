import { AppRegistry } from 'react-native'
import AppScreen from './App/Containers/AppScreen'
import { name as appName } from './App/Config/app.json'

AppRegistry.registerComponent(appName, () => AppScreen)
