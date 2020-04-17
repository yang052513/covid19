import React from "react"
import ReadBtn from "./ReadBtn"
import Title from "./Content/Titile"
import Description from "./Content/Description"
import Tag from "./Tag"

function About() {
  return (
    <div className="content-container">
      <img src="image/about.png" alt="virus" />
      <div className="text-container">
        <Tag icon={"fas fa-question-circle"} text={"关于新冠病毒"} />
        <Title text={"什么是新冠病毒？"} />
        <Description
          text={
            "冠状病毒是对一组病毒的统称，可以同时感染人类与动物，引起呼吸道疾病，轻症如同普通感冒，重症则会发展成为肺炎。动物冠状病毒感染人类并在人群中扩散是极为少见的现象。大家可能还记得 2002 - 2003 年爆发的严重急性呼吸综合征 (SARS)，这是冠状病毒从动物转移到人类的典型案例。再近一些，2012 年中东又出现了另一种典型的冠状病毒株，称为 MERS（中东呼吸综合症），科学家认为最初是从骆驼转移到人类的。"
          }
        />
        <ReadBtn text={"查看症状"} />
      </div>
    </div>
  )
}

export default About
