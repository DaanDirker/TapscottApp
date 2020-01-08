import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from 'react-redux'
import { ScrollView } from "react-native-gesture-handler";
import PaymentGraph from '../../Components/PaymentGraph/PaymentGraph'
import { fetchPaymentObject } from "../../Redux/actions/PaymentActions";

//TODO: REMOVE
import PaymentBox from "../../Components/PaymentBox/PaymentBox";

import styles from './AchievementsContainerStyles'


class AchievementsContainer extends Component {

  componentDidMount() {
    this.props.fetchPayments()
  }

  //TODO: Switch to another Graph Pie package
  //Quick fix to avoid error while all payment values are 0
  renderGraph() {
    let total = 0
    for (let key in this.props.payments) {
      total += this.props.payments[key]
    }
    
    if (total == 0) {
      return (
        <PaymentGraph
          transportation={1}
          labor={1}
          fishingnets={1}
          boatrental={1}
          bank={1}
        />
      )
    }
    return (
      <PaymentGraph
        transportation={this.props.payments.transportation}
        labor={this.props.payments.labor}
        fishingnets={this.props.payments.fishingNets}
        boatrental={this.props.payments.boatRental}
        bank={this.props.payments.bank}/>
    )
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
          {this.renderGraph()}
        </View>
        <Text style={[styles.heading, styles.lHeadingMargin]}>Historical expenditures</Text>
        <View style={{flex: 1, alignSelf: 'stretch'}}>
          <ScrollView style={styles.expendituresContainer} nestedScrollEnabled={true}>
            <PaymentBox paymentStyle={styles.scrollChild} title='Transportation' date='24/09/2019 55:6:22' amount='20$' lineColor='#39C181'/>
            <PaymentBox paymentStyle={styles.scrollChild} title='Labor' date='24/09/2019 55:6:22' amount='400$' lineColor='#39C181'/>
            <PaymentBox paymentStyle={styles.scrollChild} title='Transportation' date='24/09/2019 55:6:22' amount='20$' lineColor='#39C181'/>
            <PaymentBox paymentStyle={styles.scrollChild} title='Transportation' date='24/09/2019 55:6:22' amount='20$' lineColor='#39C181'/>
            <PaymentBox paymentStyle={styles.scrollChild} title='Transportation' date='24/09/2019 55:6:22' amount='20$' lineColor='#39C181'/>
            <PaymentBox paymentStyle={styles.scrollChild} title='Transportation' date='24/09/2019 55:6:22' amount='20$' lineColor='#39C181'/>
            <PaymentBox paymentStyle={styles.scrollChild} title='Transportation' date='24/09/2019 55:6:22' amount='20$' lineColor='#39C181'/>
            <PaymentBox paymentStyle={styles.scrollChild} title='Transportation' date='24/09/2019 55:6:22' amount='20$' lineColor='#39C181'/>
            <PaymentBox paymentStyle={styles.scrollChild} title='Transportation' date='24/09/2019 55:6:22' amount='20$' lineColor='#39C181'/>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    payments: state.payment.payments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPayments: () => dispatch(fetchPaymentObject())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AchievementsContainer)
