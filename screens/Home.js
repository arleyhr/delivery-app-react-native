import React from 'react'
import { Text } from 'react-native'

export default props => <Text onPress={() => props.navigation.navigate('Login')}>Home</Text>
