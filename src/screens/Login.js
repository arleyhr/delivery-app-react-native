import React from 'react'
import {
  SafeAreaView
 } from 'react-navigation'
import { Button } from 'react-native'

export default class extends React.Component {
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <SafeAreaView>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title='Login'
              />
      </SafeAreaView>
    )
  }
}
