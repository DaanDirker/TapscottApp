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
  lHeadingMargin: {
    marginBottom: 32
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
    height: 'auto',
    marginHorizontal: 48,
    marginBottom: 16,
    alignItems: 'center',
  },
  graphDetailContainer: {
    justifyContent: 'flex-start',
  },
  expendituresContainer: {
    flex: 1,
    flexDirection: 'column',
    maxHeight: 400,
    marginHorizontal: 48,
  },
})
