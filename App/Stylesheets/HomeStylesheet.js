import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

const skyHeight = Math.round(screenHeight - (0.15 * screenHeight))

export default StyleSheet.create({
  heading: {
    color: '#1A1A1A',
    fontFamily: 'Bitter-Bold',
    fontSize: 36,
    marginBottom: 8
  },
  subtitle: {
    fontFamily: 'Bitter-Regular',
    color: '#292929',
    fontSize: 18
  },
  donationHeading: {
    fontSize: 26,
    fontFamily: 'Bitter-Bold',
    color: '#000000'
  },
  donationSubtitle: {
    fontSize: 20,
    fontFamily: 'Bitter-Regular',
    color: '#292929'
  },
  scrollContainer: {
  },
  skyContainer: {
    height: skyHeight
  },
  seaContainer: {
    flex: 1,
  },
  backgroundWaves: {
    // position: 'absolute'
  },
  sandContainer: {
    backgroundColor: '#C7B299',
  },
  donationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headingContainer: {
    marginTop: 50,
    alignItems: 'center'
  }
})
