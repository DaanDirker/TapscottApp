import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from 'react-redux'
import { ScrollView } from "react-native-gesture-handler";
import PaymentGraph from '../../Components/PaymentGraph/PaymentGraph'
import PaymentList from '../../Components/PaymentList/PaymentList'
import { fetchPaymentObject, fetchLatestPayments } from "../../Redux/actions/PaymentActions";

import { IBAN_CATEGORIES } from '../../Utils/Constants'
import { PieColors } from '../../Utils/Colors'

import styles from './AchievementsContainerStyles'


class AchievementsContainer extends Component {

  componentDidMount() {
    this.props.fetchPayments()
    this.props.fetchLatestPayments()
  }

  //TODO: Replace with better compacter code, temporary
  formatPayments(list) {
    formattedPayments = []

    list.forEach((payment) => {
      switch (payment.sender) {
        case IBAN_CATEGORIES.IBAN1_TRANSPORT:
          formattedPayments.push({
            color: PieColors.trans,
            title: 'Transport',
            amount: payment.amount,
            timestamp: payment.timestamp
          })
          break
        case IBAN_CATEGORIES.IBAN2_LABOR:
          formattedPayments.push({
            color: PieColors.labor,
            title: 'Labor',
            amount: payment.amount,
            timestamp: payment.timestamp
          })
          break
        case IBAN_CATEGORIES.IBAN3_FISHING_NETS:
          formattedPayments.push({
            color: PieColors.fishingNets,
            title: 'Fishing Nets',
            amount: payment.amount,
            timestamp: payment.timestamp
          })
          break
        case IBAN_CATEGORIES.IBAN4_BOAT_RENTAL:
          formattedPayments.push({
            color: PieColors.boatRental,
            title: 'Boat Rental',
            amount: payment.amount,
            timestamp: payment.timestamp
          })
          break
        case IBAN_CATEGORIES.IBAN5_BANK:
          formattedPayments.push({
            color: PieColors.bank,
            title: 'Bank',
            amount: payment.amount,
            timestamp: payment.timestamp
          })
          break
        default:
          formattedPayments.push({
            color: '#FFFFFF',
            title: 'Unknown',
            amount: payment.amount,
            timestamp: payment.timestamp
          })
          break
      }
    })
    return formattedPayments
  }

  render() {
    return (
      <View style={styles.achievementsContainer}>
        <View style={styles.aboutContainer}>
          <Text style={[styles.heading, styles.headingMargin]}>About us</Text>
          <Text style={[styles.text, styles.aboutText]}>
            Tapscott was founded in 2018 by a Dutch group of blockchain students.
            Their goal was to help the environment by cleaning the ocean. Every dollar equals ten less kilo’s
            of plastic floating in the ocean. Every donation and expenditure
            will be logged and can be seen on the blockchain.
          </Text>
        </View>
        <View style={styles.graphContainer}>
          <Text style={[styles.heading, styles.lHeadingMargin]}>Achievements</Text>
          <PaymentGraph
            transportation={this.props.payments.transport}
            labor={this.props.payments.labor}
            fishingnets={this.props.payments.fishingNets}
            boatrental={this.props.payments.boatRental}
            bank={this.props.payments.bank} />
        </View>
        <Text style={[styles.heading, styles.lHeadingMargin]}>Historical expenditures</Text>
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
          <ScrollView style={styles.expendituresContainer} nestedScrollEnabled={true}>
            <PaymentList payments={this.formatPayments(this.props.latestPayments)}/>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    payments: state.payment.payments,
    latestPayments: state.payment.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPayments: () => dispatch(fetchPaymentObject()),
    fetchLatestPayments: () => dispatch(fetchLatestPayments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AchievementsContainer)
