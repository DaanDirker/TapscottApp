import { StyleSheet, Dimensions } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

const skyHeight = Math.round(screenHeight - (0.15 * screenHeight))

export default StyleSheet.create({
  heading: {
    color: '#1A1A1A',
    fontFamily: 'Bitter-Bold',
    fontSize: 36,
  },
  subtitle: {
    fontFamily: 'Bitter-Regular',
    color: '#292929',
    fontSize: 18
  },
  raisedHeading: {
    color: '#1A1A1A',
    fontFamily: 'Bitter-Regular',
    fontSize: 36,
  },
  headingContainer: {
    marginTop: 70,
    alignItems: 'center'
  },
  boeiButton: {
    width: 105,
    height: 167,
  },
  skyBackground: {
    height: skyHeight
  },
  skyContent: {
    flex: 1,
    height: 300,
    alignItems: 'center',
  },
  totalAmountContainer: {
    marginTop: 100,
    alignItems: 'center'
  },
  sandContainer: {
    backgroundColor: '#C7B299',
  },
  donationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
})
