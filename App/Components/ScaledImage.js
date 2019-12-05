import React, { Component } from "react"
import { Image, Text } from "react-native"

export default class ScaledImage extends Component {
  constructor(props) {
    super(props)

    let source = Image.resolveAssetSource(this.props.source)
    
    if (this.props.width && !this.props.height) {
      this.state = {
        width: this.props.width,
        height: source.height * (this.props.width / source.width)
      }
    } else if (!this.props.width && this.props.height) {
      this.state = {
        width: source.width * (this.props.height / source.height),
        height: this.props.height
      }
    } else {
      this.state = { width: source.width, height: source.height }
    }
  }

  render() {
    return (
      <Image
        source={this.props.source}
        style={{ height: this.state.height, width: this.state.width }}
      />
    )
  }
}
