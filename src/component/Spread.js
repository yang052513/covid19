import React from "react"
import Title from "./Content/Titile"
import Description from "./Content/Description"
import Tag from "./Tag"
import ReadBtn from "./ReadBtn"
import SpreadItem from "./Spread/SpreadItem"

function Spread() {
  return (
    <div className="spread-container">
      <Tag icon={"fas fa-user-friends"} text={"传播途径"} />
      <Title text={"新冠病毒是如何传播的？"} />
      <Description
        text={
          "新型冠状病毒主要的传播途径还是呼吸道飞沫传播和接触传播，气溶胶和粪—口等传播途径尚待进一步明确。通过流行病学调查显示，病例多可以追踪到与确诊的病例有过近距离密切接触的情况。"
        }
      />
      <div className="spread-item-container">
        <SpreadItem
          image={"image/spread1.png"}
          title={"直接传播"}
          info={
            "患者喷嚏、咳嗽、说话的飞沫，呼出的气体近距离直接吸入导致的感染"
          }
        />
        <SpreadItem
          image={"image/spread2.png"}
          title={"气溶胶传播"}
          info={"飞沫混合在空气中，形成气溶胶，吸入后导致感染"}
        />
        <SpreadItem
          image={"image/spread3.png"}
          title={"接触传播"}
          info={
            "飞沫沉积在物品表面，接触污染手后，再接触口腔、鼻腔、眼睛等黏膜，导致感染"
          }
        />
      </div>
      <ReadBtn text={"预防措施"} />
    </div>
  )
}

export default Spread
