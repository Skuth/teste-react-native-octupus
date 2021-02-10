import React from "react"
import { StatusBar } from "expo-status-bar"
import { Provider } from "react-redux"

import Routes from "./src/routes"

import store from "./src/store/store"

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  )
}

export default App
