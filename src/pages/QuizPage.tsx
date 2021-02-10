import React, { useState, useEffect } from "react"
import { ScrollView } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { StackActions, useNavigation } from "@react-navigation/native"

import { quizInterface, quizStateInterface } from "../interfaces"

import Container from "../components/Container"
import Button from "../components/Button"

import {
  QuizHeader,
  QuizProgressText,
  QuizTimeLeftText,
  QuizProgressContainer,
  QuizProgress,
  QuizBody,
  QuizQuestion,
  QuizImage,
  QuizOptionsContainer,
  QuizOptionItem,
  QuizButtons
} from "../styles/pages/QuizPage"

import {
  handleSelectQuestion,
  handleActiveQuestion,
  handleSetAwnser,
  handleRemoveLastAwnser,
  handleCompleteQuiz
} from "../store/Quiz/Quiz.actions"

const QuizPage = () => {
  const questions: quizInterface = useSelector(
    (state: quizStateInterface) => state.quiz
  )

  const dispatch = useDispatch()
  const navigation = useNavigation()

  const minutesToMs = (minutes: number) => {
    return 1000 * 60 * minutes
  }

  const [timeLeft, setTimeLeft] = useState<number>(
    minutesToMs(questions.timeLimit)
  )
  const [quizBodyView, setQuizBodyView] = useState<ScrollView>()

  useEffect(() => {
    const timeLeftInterval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1000)
      } else {
        if (questions.activeOption !== null) {
          const awnser = {
            question: questions.activeQuestion,
            option: questions.activeOption
          }

          dispatch(handleSetAwnser(awnser))
        }

        verifyAwnsers()
        dispatch(handleCompleteQuiz())
        dispatch(handleSelectQuestion(null))

        clearInterval(timeLeftInterval)
      }
    }, 1000)
    return () => {
      clearInterval(timeLeftInterval)
    }
  })

  const getTimeLeftFormated = (time: number) => {
    const minutes = Math.floor(timeLeft / 1000 / 60)
    const seconds = Math.floor((timeLeft / 1000) % 60)

    let parsedMinutes = minutes.toString()
    let parsedSeconds = seconds.toString()

    if (minutes < 10) {
      parsedMinutes = `0${minutes}`
    }
    if (seconds < 10) {
      parsedSeconds = `0${seconds}`
    }

    return `${parsedMinutes}:${parsedSeconds}`
  }

  const verifyAwnsers = () => {
    let points = 0

    questions.awnsers.forEach(awnser => {
      const question = questions.questions.find((q, i) => i === awnser.question)

      if (typeof question !== "undefined") {
        const option = question.options[awnser.option]
        if (typeof option !== "undefined") {
          if (option.correct) {
            points++
          }
        }
      }
    })

    navigation.dispatch(
      StackActions.replace("QuizScorePage", {
        score: Math.floor((100 / questions.questions.length) * points),
        corrects: points,
        total: questions.questions.length
      })
    )
  }

  const handleNextQuestion = () => {
    if (questions.activeOption !== null) {
      const awnser = {
        question: questions.activeQuestion,
        option: questions.activeOption
      }

      dispatch(handleSetAwnser(awnser))

      if (questions.activeQuestion + 1 < questions.questions.length) {
        dispatch(handleActiveQuestion(questions.activeQuestion + 1))
      } else {
        verifyAwnsers()
        dispatch(handleCompleteQuiz())
      }

      dispatch(handleSelectQuestion(null))
    }
  }

  const handlePrevQuestion = () => {
    if (questions.questions.length > questions.activeQuestion - 1) {
      dispatch(handleRemoveLastAwnser())
      dispatch(handleActiveQuestion(questions.activeQuestion - 1))
      dispatch(handleSelectQuestion(null))
    }
  }

  return (
    <Container>
      <QuizHeader>
        <QuizProgressText>
          Questão {questions.activeQuestion + 1}/{questions.questions.length}
        </QuizProgressText>
        <QuizTimeLeftText>{getTimeLeftFormated(timeLeft)}</QuizTimeLeftText>
        <QuizProgressContainer>
          <QuizProgress
            step={questions.activeQuestion + 1}
            steps={questions.questions.length}
          />
        </QuizProgressContainer>
      </QuizHeader>

      {questions.questions[questions.activeQuestion] && (
        <QuizBody
          ref={(scrollView: ScrollView) => setQuizBodyView(scrollView)}
          showsVerticalScrollIndicator={false}
        >
          <QuizImage
            source={{
              uri: questions.questions[questions.activeQuestion].image
            }}
            style={{ resizeMode: "stretch" }}
            onLoad={() => quizBodyView?.scrollTo({ y: 0 })}
          />
          <QuizQuestion>
            {questions.questions[questions.activeQuestion].question}
          </QuizQuestion>
          <QuizOptionsContainer>
            {questions.questions[questions.activeQuestion].options.map(
              (question, index) => (
                <QuizOptionItem
                  key={index}
                  active={questions.activeOption === index}
                  onPress={() => dispatch(handleSelectQuestion(index))}
                >
                  {question.option}
                </QuizOptionItem>
              )
            )}
          </QuizOptionsContainer>
        </QuizBody>
      )}

      <QuizButtons>
        {questions.activeOption !== null && (
          <Button
            text={
              questions.activeQuestion + 1 < questions.questions.length
                ? "Próximo"
                : "Finalizar"
            }
            action={handleNextQuestion}
          />
        )}
        {questions.activeQuestion > 0 && (
          <Button
            text="Voltar"
            marginTop="0px"
            backgroundColor="transparent"
            action={handlePrevQuestion}
          />
        )}
      </QuizButtons>
    </Container>
  )
}

export default QuizPage
