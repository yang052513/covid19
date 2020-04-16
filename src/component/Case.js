import React, { Component } from "react"
import CaseItem from "./Case/CaseItem"
class Case extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="case-container">
        <CaseItem count={"204"} caption={"疫情国家"} />
        <CaseItem count={"1,098,848"} caption={"确诊案例"} />
        <CaseItem count={"226,106"} caption={"恢复案例"} />
        <CaseItem count={"58,871"} caption={"死亡人数"} />
      </div>
    )
  }
}

export default Case
