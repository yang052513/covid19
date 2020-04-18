import React from "react"

function ReadBtn(props) {
  return (
    <button data-aos="fade-up" className="read-btn">
      {props.text}
    </button>
  )
}

export default ReadBtn
