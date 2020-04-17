import React, { Component } from "react"
import Title from "./Content/Titile"
import Description from "./Content/Description"
import Tag from "./Tag"
import BlogItem from "./Blog/BlogItem"

class Blog extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="blog-container">
        <div className="blog-intro">
          <Tag icon={"fas fa-user-friends"} text={"相关资讯"} />
          <Title text={"新冠病毒的最新资讯"} />
          <Description text={"查看新冠病毒相关的最新资讯"} />
        </div>
        <BlogItem />
      </div>
    )
  }
}

export default Blog
