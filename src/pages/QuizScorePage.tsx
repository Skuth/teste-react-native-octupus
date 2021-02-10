import React from "react"
import {
  StackActions,
  useNavigation,
  useRoute,
  RouteProp
} from "@react-navigation/native"
import { QuizScoreParams } from "../interfaces"

import Container from "../components/Container"
import Button from "../components/Button"

import {
  ScoreContainer,
  Title,
  Text,
  ScoreCircleContainer,
  ScoreCircleText
} from "../styles/pages/QuizScorePage"

const QuizScorePage = () => {
  const navigation = useNavigation()
  const route = useRoute<RouteProp<QuizScoreParams, "params">>()
  const { score, corrects, total } = route.params

  const handleBackToHome = () => {
    navigation.dispatch(StackActions.replace("QuizInfoPage"))
  }

  return (
    <Container>
      {parseInt(score) > 50 ? (
        <ScoreContainer>
          <Title>Parabéns</Title>

          <ScoreCircleContainer>
            <ScoreCircleText>{score}%</ScoreCircleText>
          </ScoreCircleContainer>

          <Text>
            Você acertou {corrects} questões de {total}
          </Text>
        </ScoreContainer>
      ) : (
        <ScoreContainer>
          <Title>Não foi dessa vez :c</Title>

          <ScoreCircleContainer backgroundColor="#eb4d4b">
            <ScoreCircleText>{score}%</ScoreCircleText>
          </ScoreCircleContainer>

          <Text>
            Você acertou {corrects} questões de {total}
          </Text>
        </ScoreContainer>
      )}
      <Button text="Voltar ao início" action={handleBackToHome} />
    </Container>
  )
}

export default QuizScorePage
