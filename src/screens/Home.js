import React from 'react'
import {
    SafeAreaView
} from 'react-navigation'
import { Text } from 'react-native'

export default props => (
    <SafeAreaView>
        <Text onPress={() => props.navigation.navigate('Login')}>Home</Text>
    </SafeAreaView>
)
