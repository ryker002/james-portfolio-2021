import { Flex } from "@chakra-ui/react"
import React, { useState, useEffect, useRef } from "react"
import * as THREE from "three"
import WAVES from "vanta/dist/vanta.waves.min"

export class GridBackground extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      THREE: THREE,
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef}>Foreground content goes here</div>
  }
}
