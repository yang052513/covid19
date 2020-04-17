import React, { Component } from "react"
import CaseItem from "./Case/CaseItem"

class Case extends Component {
  constructor() {
    super()
    this.state = {
      country: 0,
      confirmed: 0,
      recovered: 0,
      death: 0,
      date: "",
    }
  }

  componentDidMount() {
    const url = "https://covid19.mathdro.id/api"
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          confirmed: data.confirmed.value,
          recovered: data.recovered.value,
          death: data.deaths.value,
          date: data.lastUpdate.replace("T", " "),
        })
        console.log(data)
      })

    fetch("https://covid19.mathdro.id/api/countries")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          country: data.countries.length,
        })
      })
  }

  render() {
    return (
      <div className="case-wrap">
        <div className="case-container">
          <CaseItem
            count={this.state.country}
            caption={"疫情国家"}
            color={{ color: "#ffaf47" }}
          />
          <CaseItem
            count={this.state.confirmed}
            caption={"确诊案例"}
            color={{ color: "#cb44fc" }}
          />
          <CaseItem
            count={this.state.recovered}
            caption={"恢复案例"}
            color={{ color: "#44fc7e" }}
          />
          <CaseItem
            count={this.state.death}
            caption={"死亡人数"}
            color={{ color: "#fc4444" }}
          />
        </div>
        <p className="case-source">
          ***数据最近一次更新于{this.state.date}, Source: mathdroid
        </p>
      </div>
    )
  }
}

export default Case
