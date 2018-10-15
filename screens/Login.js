import React from 'react'
import { Button } from 'react-native'

export default class extends React.Component {
  static navigationOptions = {
    header: null
  }
  render () {
    return <Button
      onPress={() => this.props.navigation.navigate('Home')}
      title='Login'
           />
  }
}
