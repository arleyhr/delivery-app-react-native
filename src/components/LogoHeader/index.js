import React from "react"

import { Image, Container } from "./styles"

const logo = require("@assets/delivery-appbar-logo.png")

function LogoHeader() {
  return (
    <Container>
      <Image source={logo} resizeMode="contain" />
    </Container>
  )
}

export default LogoHeader
