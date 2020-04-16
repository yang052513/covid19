import React from "react"
function CaseItem(props) {
  return (
    <div>
      <p>{props.count}</p>
      <p>{props.caption}</p>
    </div>
  )
}

export default CaseItem
