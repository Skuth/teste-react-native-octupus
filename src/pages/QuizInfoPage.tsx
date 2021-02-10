import React from "react"
import { useNavigation, StackActions } from "@react-navigation/native"

import Container from "../components/Container"
import Button from "../components/Button"

import {
  Title,
  Description,
  ButtonContainer,
  QuizContainer
} from "../styles/pages/QuizInfoPage"

const QuizInfoPage = () => {
  const navigation = useNavigation()

  const handleQuizStart = () => {
    navigation.dispatch(StackActions.replace("QuizPage"))
  }

  return (
    <Container>
      <QuizContainer>
        <Title>Quiz</Title>
        <Description>
          Um pequeno quiz sobre geografia e história para testar seus
          conhecimentos sobre o assunto. Que tal tentar?
        </Description>
      </QuizContainer>

      <ButtonContainer>
        <Button text="Iniciar" action={handleQuizStart} />
      </ButtonContainer>
    </Container>
  )
}

export default QuizInfoPage
