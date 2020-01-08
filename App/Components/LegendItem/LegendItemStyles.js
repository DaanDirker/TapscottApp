import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  rootContainer: {
    height: 22,
    flexDirection: 'row'
  },
  leftArea: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  square: {
    width: 22,
    height: 22,
    alignItems: 'stretch',
    marginRight: 8
  },
  baseFont: {
    fontFamily: 'Bitter-Bold',
    color: '#343434',
    fontSize: 16
  }
})