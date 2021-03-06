/* eslint-disable prettier/prettier */
export interface quizInterface {
  activeOption: number | null,
  activeQuestion: number,
  timeLimit: number,
  awnsers: Array<{
    question: number,
    option: number
  }>,
  questions: Array<{
    image: string,
    question: string,
    options: Array<{
      option: string,
      correct: boolean,
    }>
  }>
}

export interface quizStateInterface {
  quiz: quizInterface
}

export interface QuizProgressProps {
  step: number,
  steps: number
}

export interface QuizOptionItemProps {
  active?: boolean
}

export type QuizScoreParams = {
  params: {
    score: string,
    corrects: string,
    total: string
  }
}

export interface ScoreCircleContainerProps {
  backgroundColor?: string
}

export interface ActionInterface {
  type: string,
  option: string,
  question: string,
  awnser: {
    question: number,
    option: number
  }
}

export interface ButtonContainerProps {
  marginTop: string,
  backgroundColor?: string
}

export interface ButtonTextProps {
  textColor?: string
}

export interface ButtonProps {
  text: string,
  marginTop?: string,
  backgroundColor?: string,
  textColor?: string,
  action?: Function
}