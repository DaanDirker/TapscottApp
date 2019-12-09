import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  buttonContainer: {
    flex: 1  
  },
  selectedItem: {
    borderWidth: 3,
    borderColor: '#41372F',
  },
  selectedText: {
    fontSize: 24,
    color: '#41372F'
  },
  baseMargin: {
    marginRight: 8
  },
  input: {
    color: "#625449",
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 8
  },
  donateButton: {
    marginTop: 8,
    height: 60,
    width: 150
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
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
})