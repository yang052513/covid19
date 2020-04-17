import React from "react"

function BlogItem() {
  return (
    <div className="blog-item">
      <img src="image/sample.jpg" alt="news" />

      <p className="blog-title">
        New Jersey AG opens probe of nursing home deaths after finding 17 bodies
        in facility hit by coronavirus - CNBC
      </p>
      <p className="blog-author">Noah Higgins-Dunn</p>
      <p className="blog-source">CNBC</p>
      <p className="blog-time">2020-04-16 T22:26:43Z</p>
    </div>
  )
}

export default BlogItem
