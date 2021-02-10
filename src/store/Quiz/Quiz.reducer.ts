import quizMock from "../../mocks/quiz.json"
import { quizInterface, ActionInterface } from "../../interfaces"

export default function (
  state: quizInterface = quizMock,
  action: ActionInterface
) {
  switch (action.type) {
    case "SET_ACTIVE_OPTION":
      return { ...state, activeOption: action.option }

    case "SET_ACTIVE_QUESTION":
      return { ...state, activeQuestion: action.question }

    case "SET_AWNSER":
      const awnsers = state.awnsers
      awnsers.push(action.awnser)
      return {
        ...state,
        awnsers: awnsers
      }

    case "REMOVE_AWNSER":
      return {
        ...state,
        awnsers: state.awnsers.length > 1 ? state.awnsers.pop() : []
      }

    case "COMPLETE_QUIZ":
      return {
        ...state,
        awnsers: [],
        activeOption: undefined,
        activeQuestion: 0
      }

    default:
      return state
  }
}
