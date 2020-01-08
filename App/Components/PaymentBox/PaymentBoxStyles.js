import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  line: {
    height: 6
  }, 
  boxContainer: {
    elevation: 4,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 60
  },
  leftArea: {
    flex: 3,
    margin: 8
  },
  rightArea: {
    flex: 1,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  baseFont: {
    fontFamily: 'Bitter-Bold',
    color: '#343434',
    fontSize: 16
  },
  dateFont: {
    fontFamily: 'Bitter-Regular',
    color: '#909090',
    fontSize: 9
  }
})
