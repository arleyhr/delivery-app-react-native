import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

const inputHeight = 40

export const Input = styled.TextInput`
  background: white;
  height: ${inputHeight};
  padding-horizontal: 10;
  margin-vertical: 2;
  font-family: 'cubano-regular'
  ${ifProp('radius', css`
    border-radius: 8;
  `)}
`