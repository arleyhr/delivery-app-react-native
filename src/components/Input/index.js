import React from 'react'

import theme from '@config/theme'
import { Input } from './styles'

export default ({
  ...props
}) => (
  <Input
    autoCapitalize='none'
    underlineColorAndroid='transparent'
    placeholderTextColor={theme.colors.placeholder}
    {...props}
  />
)