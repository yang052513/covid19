import React, { Component } from 'react'
import { fetchData } from './Api'
import Navbar from './Navbar/Navbar'
import Home from './Home'
import Case from './Case'
import Chart from './Chart'
import Country from './Country'
import About from './About'
import Symptom from './Symptom'
import Spread from './Spread'
import Preventation from './Preventation'
import Blog from './Blog'
import Footer from './Footer'
import '../style/index.css'
import AOS from 'aos'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      country: '',
    }
  }

  async componentDidMount() {
    const data = await fetchData()

    this.setState({ data })
  }

  handleCountryChange = async country => {
    const data = await fetchData(country)

    this.setState({ data, country: country })
  }

  render() {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease',
      delay: 100,
    })
    return (
      <div>
        <Navbar />
        <Home />
        <Case />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
        <About />
        <Symptom />
        <Spread />
        <Preventation />
        {/* <Blog /> */}
        <Footer />
      </div>
    )
  }
}

export default App
