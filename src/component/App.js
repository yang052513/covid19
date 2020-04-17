import React, { Component } from "react"
import { fetchData } from "./Api"
import Navbar from "./Navbar/Navbar"
import Home from "./Home"
import Case from "./Case"
import Chart from "./Chart"
import About from "./About"
import Symptom from "./Symptom"
import Spread from "./Spread"
import Preventation from "./Preventation"
import Blog from "./Blog"
import "../style/index.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      country: "",
    }
  }

  async componentDidMount() {
    const data = await fetchData()

    this.setState({ data })
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country)

    this.setState({ data, country: country })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Case />
        <Chart data={this.state.data} country={this.state.country} />
        <About />
        <Symptom />
        <Spread />
        <Preventation />
        <Blog />
      </div>
    )
  }
}

export default App
