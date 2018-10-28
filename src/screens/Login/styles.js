import {
  Dimensions
} from 'react-native'
import styled from 'styled-components'
import { prop } from 'styled-tools'

const {
  height
} = Dimensions.get('window')

export const Container = styled.View`
  background: ${prop('theme.colors.primary')};
  min-height: ${height};
`