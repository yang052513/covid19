import React from "react"
import Title from "./Content/Titile"
import Description from "./Content/Description"
import Tag from "./Tag"
import PreventItem from "./Preventation/PrevenItem"

function Preventation() {
  return (
    <div className="prevent-container">
      <div className="prevent-intro">
        <Tag icon={"fas fa-syringe"} text={"预防措施"} />
        <Title text={"世卫组织预防建议"} />
        <Description
          text={"世卫组织驻华代表处就新型冠状病毒给出以下预防建议:"}
        />
      </div>

      <div className="prevent-item-container">
        <PreventItem
          title={"勤洗手"}
          info={"用肥皂和清水或含有酒精的洗手液洗手"}
          image={"image/service1.png"}
        />
        <PreventItem
          title={"外出时佩戴口罩"}
          info={"避免在未加防护情况下与病人接触"}
          image={"image/service2.png"}
        />
        <PreventItem
          title={"保护他人免于生病"}
          info={"咳嗽或打喷嚏时，用纸巾或袖口将口鼻完全遮住"}
          image={"image/service3.png"}
        />
        <PreventItem
          title={"注意食品安全"}
          info={"肉制品需彻底烹饪和妥善处理"}
          image={"image/service4.png"}
        />
        <PreventItem
          title={"避免与动物直接接触"}
          info={"接触动物和动物产品后，用肥皂和清水洗手"}
          image={"image/service5.png"}
        />
        <PreventItem
          title={"寻求医疗帮助"}
          info={"如果出现相关症状，请联系您的家庭医生或医院"}
          image={"image/service6.png"}
        />
      </div>
    </div>
  )
}

export default Preventation
