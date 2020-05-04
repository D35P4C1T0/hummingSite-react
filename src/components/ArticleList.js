import React, { Component } from "react"
import { Materialcard } from "./Materialcard"
import axios from "axios"

const { REACT_APP_JSONBinURI, REACT_APP_JSONBinAPIKEY } = process.env

export class ArticleList extends Component {
  getArticles() {
    axios
      .get(REACT_APP_JSONBinURI + "/latest", {
        headers: { "secret-key": REACT_APP_JSONBinAPIKEY },
      })
      .then((respone) => {
        let articleList = respone.data.articles
        articleList.forEach((article) => {
          console.log(article)
          return (
            <Materialcard
              content={article.content}
              title={article.title}
              id={article.id}
            />
          )
        })
      })
  }

  render() {
    return <div>{this.getArticles()}</div>
  }
}
