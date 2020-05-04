import React from "react"
// import { motion } from 'framer-motion'
import { articles } from "../articles/Homearticles"
// import { ArticleList } from "../components/ArticleList"
import { Dragemoji } from "../components/Dragemoji"
import { Materialcard } from "../components/Materialcard"

export const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-10">
          <h3>
            Howdy. Did you know that this candy is for you? Come on, take it!
          </h3>{" "}
        </div>

        <div>
          <font size="+4">
            <Dragemoji emoji="🍬" />
          </font>
        </div>
      </div>
      <br></br>
      {/* <ArticleList />
       */}
      {articles.map((article) => {
        const { title, content, id } = article
        return <Materialcard content={content} title={title} key={id} />
      })}{" "}
    </div>
  )
}
