import React from "react"
function CaseItem(props) {
  return (
    <div classname="case-item">
      <p>{props.count}</p>
      <p>{props.caption}</p>
    </div>
  )
}

export default CaseItem
