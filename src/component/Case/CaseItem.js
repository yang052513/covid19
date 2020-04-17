import React from "react"
import CountUp from "react-countup"

function CaseItem(props) {
  return (
    <div className="case-item">
      <p style={props.color} className="case-cnt">
        <CountUp start={0} end={props.count} duration={2} separator={","} />
      </p>
      <p className="case-caption">{props.caption}</p>
    </div>
  )
}

export default CaseItem
