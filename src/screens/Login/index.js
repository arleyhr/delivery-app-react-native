import React from "react"
import PropTypes from "prop-types"

import { SafeAreaView } from "react-navigation"

import Button from "@components/Button"
import Input from "@components/Input"

import { Container, FormContainer, Logo, InputContainer } from "./styles"

const logo = require("@assets/delivery-logo.png")

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    this.moveToHome = this.moveToHome.bind(this)
  }
  moveToHome() {
    this.props.navigation.navigate("Home")
  }
  render() {
    const { moveToHome } = this

    return (
      <SafeAreaView>
        <Container behavior="padding">
          <FormContainer>
            <Logo source={logo} resizeMode="contain" />
            <InputContainer>
              <Input placeholder="LOGIN" radius />
            </InputContainer>
            <InputContainer>
              <Input placeholder="PASSWORD" radius secureTextEntry />
            </InputContainer>
            <Button handlePress={moveToHome} text="Login" secondary />
          </FormContainer>
        </Container>
      </SafeAreaView>
    )
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default LoginScreen
