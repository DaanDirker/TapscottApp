import React, { Component } from 'react'
import { WebView } from 'react-native-webview'
import { connect } from 'react-redux'

class WebviewContainer extends Component {

  render() {
    return (
      <WebView source={{ uri: this.props.payment.checkoutUrl }}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    payment: state.payment.data
  }
}

export default connect(mapStateToProps, null)(WebviewContainer)
