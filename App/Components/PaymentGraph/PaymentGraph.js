import React, { Component } from "react"
import { View, FlatList } from "react-native"
import PieChart from 'react-native-pie-chart' 
import LegendItem from '../LegendItem/LegendItem'

import styles from "./PaymentGraphStyles"
import { PieColors } from "../../Utils/Colors";

export default class TransactionGraph extends Component {

  categories = [
    { 
      color: PieColors.transportation,
      title: 'Transportation', 
      value: this.props.transportation 
    },
    { 
      color: PieColors.labor,
      title: 'Labor', 
      value: this.props.labor
    },
    { 
      color: PieColors.fishingNets,
      title: 'Fishing nets', 
      value: this.props.fishingnets
    },
    { 
      color: PieColors.boatRental,
      title: 'Boat rental', 
      value: this.props.boatrental
    },
    { 
      color: PieColors.bank,
      title: 'Bank', 
      value: this.props.bank
    }
  ]

  render() {
    return (
      <View>
        <View style={styles.graphContainer}>
          <PieChart
            chart_wh={300}
            series={this.categories.filter(category => category.value > 0).map(payment => payment.value)}
            sliceColor={this.categories.filter(category => category.value > 0).map(payment => payment.color)}
            doughnut={true}
            coverRadius={0.7}
            coverFill='#C7B299'
          />
        </View>
        <View style={styles.legendContainer}>
          <FlatList style={styles.flatList}
            data={this.categories}
            renderItem={({item}) => (
              <LegendItem
                legendStyles={styles.legendItem}
                title={item.title}
                amount={item.value + '$'}
                squareColor={item.color}
            />)}
            keyExtractor={item => item.title}
          />
        </View>
      </View>
    )
  }
}
