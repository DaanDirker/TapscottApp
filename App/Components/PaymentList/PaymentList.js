import React, { Component } from "react"
import { View, FlatList} from "react-native"

import PaymentBox from "../PaymentBox/PaymentBox";

import styles from "./PaymentListStyles";

export default class PaymentList extends Component {

  constructor(props) {
    super(props)
    console.log('Constructor PaymentList')
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.payments}
          renderItem={({ item }) => (
            <PaymentBox 
              paymentStyle={styles.paymentStyle} 
              title={item.title} 
              date={item.timestamp} 
              amount={item.amount + '$'} 
              lineColor={item.color}/>
          )}
          keyExtractor={item => item.timestamp}
        />
      </View>
    )
  }
}
