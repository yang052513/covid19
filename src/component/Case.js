import React, { Component } from "react"
import CaseItem from "./Case/CaseItem"
class Case extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="case-wrap">
        <div className="case-container">
          <CaseItem
            count={"204"}
            caption={"疫情国家"}
            color={{ color: "blue" }}
          />
          <CaseItem
            count={"1,098,848"}
            caption={"确诊案例"}
            color={{ color: "purple" }}
          />
          <CaseItem
            count={"226,106"}
            caption={"恢复案例"}
            color={{ color: "green" }}
          />
          <CaseItem
            count={"58,871"}
            caption={"死亡人数"}
            color={{ color: "red" }}
          />
        </div>
        <p className="case-source">
          ***数据最近一次更新于15分钟以前, Source: Wikipedia
        </p>
      </div>
    )
  }
}

export default Case
