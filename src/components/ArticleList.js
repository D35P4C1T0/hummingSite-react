import React, { Component } from "react"
import { Materialcard } from "./Materialcard"
import axios from "axios"

const { REACT_APP_JSONBinURI, REACT_APP_JSONBinAPIKEY } = process.env

export class ArticleList extends Component {
  constructor() {
    super()
    this.state = { articles: [] }
  }

  async componentDidMount() {
    await axios
      .get(REACT_APP_JSONBinURI + "/latest", {
        headers: { "secret-key": REACT_APP_JSONBinAPIKEY },
      })
      .then((response) => {
        const articleList = response.data.articles.reverse()
        articleList.forEach((article) => {
          const card = (
            <Materialcard
              content={article.content}
              title={article.title}
              id={article.id}
            />
          )
          this.state.articles.push(card)
          this.forceUpdate()
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const articles = this.state.articles
    if (articles.length === 0) {
      return null
    }
    return (
      <div>
        {articles.map((article) => {
          return article
        })}
      </div>
    )
  }
}
