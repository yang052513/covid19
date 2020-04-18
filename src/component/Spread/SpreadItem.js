import React from "react"

function SpreadItem(props) {
  return (
    <div className="spread-item" data-aos="fade-up">
      <img src={props.image} alt="spread" />
      <h4>{props.title}</h4>
      <p>{props.info}</p>
    </div>
  )
}

export default SpreadItem
