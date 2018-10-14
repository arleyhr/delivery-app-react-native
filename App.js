import React from 'react'
import { Font } from 'expo'
import styled, { ThemeProvider } from 'styled-components'

import theme from './config/theme'

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`

const StyledText = styled.Text`
  color: ${props => props.theme.colors.sliderText}
  font-family: 'cubano-regular'
`

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isAppReady: false
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'cubano-regular': require('./assets/fonts/cubano-regular.ttf'),
      'bariol-regular': require('./assets/fonts/bariol-regular.ttf'),
      'bariol-bold': require('./assets/fonts/bariol-bold.ttf')
    })
    this.setState({ isAppReady: true })
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          {
            this.state.isAppReady && (
              <StyledText>Hello Delivery!</StyledText>
            )
          }
        </Container>
      </ThemeProvider>
    )
  }
}
