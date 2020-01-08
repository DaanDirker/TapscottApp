import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from 'react-redux'
import PaymentGraph from '../../Components/PaymentGraph/PaymentGraph'

//TODO: REMOVE
import PaymentBox from "../../Components/PaymentBox/PaymentBox";

import styles from './AchievementsContainerStyles'
import { ScrollView } from "react-native-gesture-handler";

class AchievementsContainer extends Component {

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
            transportation={756}
            labor={420}
            fishingnets={66}
            boatrental={120}
            bank={344}/>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect()(AchievementsContainer)
