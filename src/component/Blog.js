import React, { Component } from "react"
import Title from "./Content/Titile"
import Description from "./Content/Description"
import Tag from "./Tag"
import BlogItem from "./Blog/BlogItem"

class Blog extends Component {
  constructor() {
    super()
    this.state = {
      article: [],
    }
  }

  componentDidMount() {
    let url =
      "http://newsapi.org/v2/top-headlines?" +
      "q=Coronavirus&" +
      "sortBy=popularity&" +
      "apiKey=6cb597ddd50f4a468d2c0f19ec397a74"
    // const req = new Request(url)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          article: data.articles,
        })
      })
  }
  render() {
    console.log(this.state.article)
    let date = new Date()
    let localDate = date.getMonth() + 1 + "月" + date.getDate() + "日"
    const articleComponent = this.state.article.map((item) => (
      <BlogItem key={item.url} article={item} />
    ))

    return (
      <div className="blog-container">
        <div className="blog-intro" data-aos="fade-up">
          <Tag icon={"fas fa-user-friends"} text={"相关资讯"} />
          <Title text={"新冠病毒的最新资讯"} />
          <Description text={localDate + " 新冠病毒相关的最新资讯"} />
        </div>
        <div className="blog-item-container">{articleComponent}</div>
      </div>
    )
  }
}

export default Blog
