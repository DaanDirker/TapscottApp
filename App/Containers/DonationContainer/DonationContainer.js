import React, { Component } from "react"
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner"
import { View, Text } from "react-native"
import { connect } from 'react-redux'
import {
  fetchPayment,
  fetchPaymentObject,
  fetchLatestPayments
} from '../../Redux/actions/PaymentActions'

import {
  setDonationAmount,
  setDonationName,
  setDonationCustom
} from '../../Redux/actions/DonationValueActions'

import RoundedButton from "../../Components/RoundedButton/RoundedButton"
import InputField from "../../Components/InputField/InputField"

import styles from "./DonationContainerStyles"

class DonationContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      customAmount: 0
    }
  }

  async handleCheckout(amount, name) {
    await this.props.fetchPayment(amount + ".00", name)

    if (this.props.payment.data.checkoutUrl) {

      const { navigate } = this.props.navigation
      navigate("Webview")
    }
  }

  renderSpinner() {
    if (this.props.payment.isFetching) {
      return <LoadingSpinner />
    }
  }

  isSelected(amount) {
    return amount == this.props.donationAmount && !this.props.isCustom
  }

  setCustomAmount(amount) {
    this.props.setDonationAmount(amount, true)
    this.setState({
      customAmount: amount
    })
  }

  render() {
    return (
      <View style={{ flex: 1, maxWidth: 340 }}>
        <View style={{ alignItems: 'center', marginBottom: 34 }}>
          <Text style={styles.donationHeading}>Save the ocean now!</Text>
          <Text style={styles.donationSubtitle}>Every dollar counts</Text>
        </View>
        <View style={styles.row}>
          {/* First Row */}
          <View style={styles.buttonContainer}>
            <RoundedButton amount="1" currency="$"
              style={[this.isSelected(1) ? styles.selectedItem : null, styles.baseMargin]}
              textStyle={this.isSelected(1) ? styles.selectedText : null}
              onPress={() => this.props.setDonationAmount(1, false)} />
          </View>
          <View style={styles.buttonContainer}>
            <RoundedButton amount="5" currency="$"
              style={[this.isSelected(5) ? styles.selectedItem : null, styles.baseMargin]}
              textStyle={this.isSelected(5) ? styles.selectedText : null}
              onPress={() => this.props.setDonationAmount(5, false)} />
          </View>
          <View style={styles.buttonContainer}>
            <RoundedButton amount="10" currency="$"
              style={this.isSelected(10) ? styles.selectedItem : null}
              textStyle={this.isSelected(10) ? styles.selectedText : null}
              onPress={() => this.props.setDonationAmount(10, false)} />
          </View>
        </View>
        <View style={styles.row}>
          {/* Second Row */}
          <View style={styles.buttonContainer}>
            <RoundedButton amount="20" currency="$"
              style={[this.isSelected(20) ? styles.selectedItem : null, styles.baseMargin]}
              textStyle={this.isSelected(20) ? styles.selectedText : null}
              onPress={() => this.props.setDonationAmount(20, false)} />
          </View>
          <View style={{ flex: 2 }}>
            <InputField
              placeholder="Other amount"
              backgroundStyles={this.props.isCustom ? styles.selectedItem : null}
              inputStyles={this.props.isCustom ? styles.selectedText : null}
              type="numeric"
              onFocus={() => this.props.setDonationAmount(this.state.customAmount, true)}
              onChangeText={(amount) => this.setCustomAmount(amount)} />
          </View>
        </View>
        <View style={styles.row}>
          {/* Third Row */}
          <View style={{ flex: 1 }}>
            <InputField
              placeholder="Enter your name"
              onChangeText={(name) => this.props.setDonationName(name)} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <RoundedButton amount="Donate" currency="" style={styles.donateButton} textStyle={{ color: '#FFFFFF' }}
              onPress={() => this.handleCheckout(this.props.donationAmount, this.props.donationName)} />
          </View>
        </View>
        <View style={styles.loading}>
          {this.renderSpinner()}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    donationName: state.donationValue.name,
    donationAmount: state.donationValue.amount,
    isCustom: state.donationValue.custom,
    payment: state.payment
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDonationAmount: (amount, custom) => dispatch(setDonationAmount(amount, custom)),
    setDonationCustom: (custom) => dispatch(setDonationCustom(custom)),
    setDonationName: (name) => dispatch(setDonationName(name)),
    fetchPayment: (amount, name) => dispatch(fetchPayment(amount, name)),
    fetchPaymentObject: () => dispatch(fetchPaymentObject()),
    fetchLatestPayments: () => dispatch(fetchLatestPayments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationContainer)
