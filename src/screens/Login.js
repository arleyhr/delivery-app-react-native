import React from 'react'
import PropTypes from 'prop-types'

import {
  SafeAreaView
 } from 'react-navigation'

 import Button from '../components/Button'

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
        <Button
          handlePress={() => {}}
          text='Orders'
        />
        <Button
          handlePress={moveToHome}
          text='Login'
          secondary
        />
      </SafeAreaView>
    )
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default LoginScreen