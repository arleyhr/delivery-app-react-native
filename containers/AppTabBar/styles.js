import styled, { css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'

export const TabButton = styled.TouchableOpacity`
  height: 50;
  justify-content: center;
  margin-bottom: -5;
  ${ifProp('actived', css`
    border-bottom-width: 5;
    border-bottom-color: ${prop('theme.colors.tabBarHightlight')};
  `)}
`

export const TabLabel = styled.Text`
  color: white;
  font-family: 'cubano-regular';
  text-align: center;
  font-size: 13;
  padding-horizontal: 10;
  ${ifProp('actived', css`
    color: ${prop('theme.colors.tabBarHightlight')};
    margin-bottom: -5;
  `)}
`

export const TabsContainer = styled.View`
  background-color: ${prop('theme.colors.tabBar')};
  border-bottom-width: 5;
  border-bottom-color: ${prop('theme.colors.tabBarAccent')};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50;
  padding-horizontal: 15;
  position: relative;
  z-index: 1;
`
