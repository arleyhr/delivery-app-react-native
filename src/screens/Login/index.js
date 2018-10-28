import React from 'react'
import PropTypes from 'prop-types'

import {
  SafeAreaView
 } from 'react-navigation'

import Button from '@components/Button'

import {
  Container
} from './styles'

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    this.moveToHome = this.moveToHome.bind(this)
  }
  moveToHome () {
    this.props.navigation.navigate('Home')
  }
  render () {
    const { moveToHome } = this

    return (
      <SafeAreaView>
        <Container>
          <Button
            handlePress={() => {}}
            text='Orders'
          />
          <Button
            handlePress={moveToHome}
            text='Login'
            secondary
          />
        </Container>

      </SafeAreaView>
    )
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default LoginScreen