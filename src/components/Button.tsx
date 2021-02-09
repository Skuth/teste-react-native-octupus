import React from "react"
import { ButtonContainer, ButtonText } from "../styles/components/Button"

import { ButtonProps } from "../interfaces"

const ButtonComponent = ({
  text,
  marginTop = "10px",
  backgroundColor,
  textColor,
  action
}: ButtonProps) => {
  const handleButtonPress = () => {
    action && action()
  }

  return (
    <ButtonContainer
      marginTop={marginTop}
      backgroundColor={backgroundColor}
      onPress={handleButtonPress}
    >
      <ButtonText textColor={textColor}>{text}</ButtonText>
    </ButtonContainer>
  )
}

export default ButtonComponent
