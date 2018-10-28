import React from 'react'
import { Font } from 'expo'
import { ThemeProvider } from 'styled-components'

import theme from './src/config/theme'

import AppNavigator from './src/Navigator'


export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isAppReady: false
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'cubano-regular': require('./src/assets/fonts/cubano-regular.ttf'),
      'bariol-regular': require('./src/assets/fonts/bariol-regular.ttf'),
      'bariol-bold': require('./src/assets/fonts/bariol-bold.ttf')
    })
    this.setState({ isAppReady: true })
  }
  render() {
    return this.state.isAppReady && (
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    )
  }
}
