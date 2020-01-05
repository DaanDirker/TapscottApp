import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  heading: {
    fontFamily: 'Bitter-Bold',
    fontSize: 24
  },
  text: {
    fontFamily: 'Bitter-Regular',
    fontSize: 16
  },
  aboutText: {
    textAlign: 'center',
    padding: 16
  },
  headingMargin: {
    marginBottom: 8
  },
  achievementsContainer: {
    flex: 1,
    alignItems: 'center'
  },
  aboutContainer: {
    flex: 1,
    maxWidth: 350,
    marginBottom: 48,
    alignItems: 'center'
  },
  graphContainer: {
    marginHorizontal: 48,
    alignItems: 'center',
  },
  graphDetailContainer: {
    justifyContent: 'flex-start',
  }
})
