import React from "react"
import ReadBtn from "../ReadBtn"
import Tag from "../Tag"

function HomeText() {
  return (
    <div className="hometext-container" data-aos="fade-up">
      <Tag icon={"fas fa-exclamation-circle"} text={"Covid-19 警报"} />
      <h2>新冠病毒的认知与防护</h2>

      <p>
        新型冠状病毒肺炎是一种急性感染性肺炎，其病原体是一种先前未在人类中发现的新型冠状病毒
      </p>
      <ReadBtn text={"查看症状"} />
    </div>
  )
}

export default HomeText
