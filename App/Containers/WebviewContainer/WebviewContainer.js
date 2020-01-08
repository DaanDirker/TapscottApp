import React, { Component } from 'react'
import { WebView } from 'react-native-webview'
import { connect } from 'react-redux'

class WebviewContainer extends Component {

  _onNavigationStateChange(webViewState) {
    const { goBack } = this.props.navigation

    if (webViewState.url == "https://www.google.com/") {
      goBack()
    }
  }

  render() {
    return (
      <WebView source={{ uri: this.props.payment.checkout.checkoutUrl }}
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    payment: state.payment
  }
}

export default connect(mapStateToProps, null)(WebviewContainer)
