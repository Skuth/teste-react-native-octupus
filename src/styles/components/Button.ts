import styled from "styled-components/native"

import { ButtonContainerProps, ButtonTextProps } from "../../interfaces"

export const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: ${({ backgroundColor }: ButtonContainerProps) =>
    backgroundColor || "#7462c9"};
  border-radius: 10px;
  margin-top: ${({ marginTop }: ButtonContainerProps) => marginTop || 0};
`
export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ textColor }: ButtonTextProps) => textColor || "#ffffff"};
`
