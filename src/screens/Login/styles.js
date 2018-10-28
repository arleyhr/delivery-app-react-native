import { Dimensions } from "react-native"
import styled from "styled-components"
import { prop } from "styled-tools"

const { height } = Dimensions.get("window")

export const Container = styled.KeyboardAvoidingView`
  background: ${prop("theme.colors.primary")};
  min-height: ${height};
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const FormContainer = styled.View`
  width: 70%;
`

export const Logo = styled.Image`
  align-self: center;
  width: 90%;
`

export const InputContainer = styled.View`
  margin-bottom: 10;
`
