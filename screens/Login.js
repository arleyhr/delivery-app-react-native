import React from 'react'
import { Button } from 'react-native'

export default props => (
  <Button
    onPress={() => props.navigation.navigate('Home')}
    title='Login'
  />
)
