import { createStore, combineReducers, Store } from "redux"
import quizReducer from "./Quiz/Quiz.reducer"

const rootReducer = combineReducers({
  quiz: quizReducer
})

const store: Store = createStore(rootReducer)

export default store
