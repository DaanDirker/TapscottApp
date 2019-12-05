import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

const skyHeight = Math.round(screenHeight - (0.15 * screenHeight))

export default StyleSheet.create({
  scrollContainer: {
  },
  skyContainer: {
    flex: 1,
    flexDirection: 'column',
    height: skyHeight
  },
  seaContainer: {
    flex: 1,
  },
  backgroundWaves: {
    // position: 'absolute'
  },
  sandContainer: {
    flex: 1,
    backgroundColor: '#B29F51',
  }
})
