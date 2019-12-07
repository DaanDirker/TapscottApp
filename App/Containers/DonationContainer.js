import React, { Component } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { setDonation } from '../Redux/actions/DonationActions'
import { fetchPayment } from '../Redux/actions/PaymentActions'

class DonationContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputName: props.name,
      inputAmount: props.amount
    }
  }

  async handleCheckout(amount, name) {
    await this.props.setDonation(amount, name)
    await this.props.fetchPayment(this.props.amount, this.props.name)

    if (this.props.payment.checkoutUrl) {
      this.props.navigate('Webview')
    }
  }

  render() {
    return (
      <View>
        <Text>Name:</Text>
        <TextInput 
          numberOfLines={1}
          onChangeText={newName => this.setState({ inputName: newName})}
          value={this.state.inputName}/>
        <Text>Amount</Text>
        <TextInput
          numberOfLines={1}
          onChangeText={newAmount => this.setState({ inputAmount: newAmount})}
          value={this.state.inputAmount}/>
        <Button 
          title='Continue'
          onPress={() => this.handleCheckout(this.state.inputAmount, this.state.inputName)}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.donation.name,
    amount: state.donation.amount,
    payment: state.payment.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDonation: (amount, name) => dispatch(setDonation(amount, name)),
    fetchPayment: (amount, name) => dispatch(fetchPayment(amount,name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationContainer)
