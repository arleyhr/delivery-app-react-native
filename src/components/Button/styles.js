import styled, { css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'

import { PixelRatio } from 'react-native'

const buttonHeight = PixelRatio.getPixelSizeForLayoutSize(17)

export const Container = styled.View`
  margin-vertical: 4;
`

export const Button = styled.View`
  align-items: center;
  border-width: 0;
  border-bottom-width: 3;
  border-radius: 7;
  height: ${buttonHeight};
  justify-content: center;
  box-shadow: 0 3px 1px rgba(24,23,24,0.2);

  /* Primary */
    background-color: ${prop('theme.colors.primary')};
    border-bottom-color: ${prop('theme.colors.primaryAccent')};
  /* /Primary */

  ${ifProp('pressed', css`
		background-color: ${prop('theme.colors.primaryAccent')};
    box-shadow: none;
	`)};

  ${ifProp('secondary', css`
    background-color: ${prop('theme.colors.secondary')};
    border-bottom-color: ${prop('theme.colors.secondaryAccent')};
    ${ifProp('pressed', css`
      background-color: ${prop('theme.colors.secondaryAccent')};
    `)};
  `)}

`

export const Label = styled.Text`
  color: white;
  font-family: 'cubano-regular'
`