export const handleSelectQuestion = (option: number | undefined) => {
  return {
    type: "SET_ACTIVE_OPTION",
    option
  }
}

export const handleActiveQuestion = (question: number) => {
  return {
    type: "SET_ACTIVE_QUESTION",
    question
  }
}

export const handleSetAwnser = (awnser: any) => {
  return {
    type: "SET_AWNSER",
    awnser
  }
}

export const handleRemoveLastAwnser = () => {
  return {
    type: "REMOVE_AWNSER"
  }
}

export const handleCompleteQuiz = () => {
  return {
    type: "COMPLETE_QUIZ"
  }
}
