import React from "react"

function Tag(props) {
  return (
    <button className="alert-btn">
      <i className={props.icon}></i>
      {props.text}
    </button>
  )
}

export default Tag
