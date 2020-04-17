import React from "react"
import Navbar from "./Navbar/Navbar"
import Home from "./Home"
import Case from "./Case"
import About from "./About"
import Symptom from "./Symptom"
import Spread from "./Spread"
import Preventation from "./Preventation"
import "../style/index.css"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Case />
      <About />
      <Symptom />
      <Spread />
      <Preventation />
    </div>
  )
}

export default App
