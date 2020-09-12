import React, { Component } from "react";
import { CoolCard } from "./CoolCard";
import axios from "axios";

const { REACT_APP_JSONBinURI, REACT_APP_JSONBinAPIKEY } = process.env;

export class ArticleList extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }

  async componentDidMount() {
    await axios
      .get(REACT_APP_JSONBinURI + "/latest", {
        headers: { "secret-key": REACT_APP_JSONBinAPIKEY },
      })
      .then((response) => {
        const articleList = response.data.articles.reverse();
        articleList.forEach((article) => {
          const card = <CoolCard {...article}/>;
          this.state.articles.push(card);
          this.forceUpdate();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const articles = this.state.articles;
    if (articles.length === 0) {
      return null;
    }
    return (
      <section class="card-list">
        {articles.map((article) => {
          return article;
        })}
      </section>
    );
  }
}
