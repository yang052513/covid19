import React from "react"
function CaseItem(props) {
  return (
    <div className="case-item">
      <p style={props.color} className="case-cnt">
        {props.count}
      </p>
      <p className="case-caption">{props.caption}</p>
    </div>
  )
}

export default CaseItem
