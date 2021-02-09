import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import QuizInfoPage from "../pages/QuizInfoPage"
import QuizPage from "../pages/QuizPage"
import QuizScorePage from "../pages/QuizScorePage"

const { Navigator, Screen } = createStackNavigator()

const routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#212121" }
        }}
      >
        <Screen name="QuizInfoPage" component={QuizInfoPage} />
        <Screen name="QuizPage" component={QuizPage} />
        <Screen name="QuizScorePage" component={QuizScorePage} />
      </Navigator>
    </NavigationContainer>
  )
}

export default routes
