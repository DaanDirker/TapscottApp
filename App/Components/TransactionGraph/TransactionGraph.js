import React, { Component } from "react"
import { View } from "react-native"
import { VictoryPie, VictoryLabel, VictoryLegend } from "victory-native"

export default class TransactionGraph extends Component {

  constructor(props) {
    super(props)
  }

  colors = [
    "#39C181", 
    "#0697F7", 
    "#FFF66E", 
    "#FF585F", 
    "#EFF3EE"
  ]

  data = [
    { x: "Transportation", y: this.props.transportation, label: this.props.transportation + "$"},
    { x: "Labor", y: this.props.labor, label: this.props.labor + "$"},
    { x: "Fishing nets", y: this.props.fishingnets, label: this.props.fishingnets + "$"},
    { x: "Boat rental", y: this.props.boatrental, label: this.props.boatrental + "$"},
    { x: "Bank", y: this.props.bank, label: this.props.bank + "$"}
  ]

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <VictoryPie
          innerRadius={90}
          colorScale={this.colors}
          labelComponent={<VictoryLabel labelPlacement={"vertical"}/>}
          style={{ labels: { fill: "black", fontSize: 16, fontWeight: "bold"}}}
          labelRadius={({ innerRadius }) => innerRadius + 18}
          data={this.data}
          animate={{ easing: "exp"}}
          width={400} 
          height={400}
        />
        <VictoryLegend x={24}
          orientation="vertical"
          gutter={20}
          centerTitle
          style={{title: { fontSize: 20 } }}
          data={[
            { name: "Transportation", symbol: { fill: "#39C181" } },
            { name: "Labor", symbol: { fill: "#0697F7" } },
            { name: "Fishing nets", symbol: { fill: "#FFF66E" } },
            { name: "Boat rental", symbol: { fill: "#FF585F" } },
            { name: "Bank", symbol: { fill: "#EFF3EE" } }
          ]}
        />
      </View>
    )
  }
}
