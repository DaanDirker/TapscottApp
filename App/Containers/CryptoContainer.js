import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

import FetchData from '../Redux/actions/FetchData'

class CryptoContainer extends Component {

  async componentDidMount() {
    const data = this.props.FetchData()
    console.log(data)
  }

  render() {
    return (
      <View>
        <Text>Crypto</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, {FetchData})(CryptoContainer)
