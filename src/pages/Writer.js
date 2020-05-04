import React, { Component } from "react"
import axios from "axios"
require("dotenv").config()

/*  Ok, I'm being serious here. WHY THE FUCK DO YOU PUT 
    THE FUCKING DOLLAR SIGN ($) IN YOUR FUCKING SHITTY API
    KEY? I mean, having a dollar sign in a .env variable 
    totally breaks its import.
    E.g. the variable:

    FOO=bar$otherthings.1337

    just gets imported as just 1337 or something not 
    intended as normal import logic. Having dots in your
    api key is going to make this ever worse. Now, I need to
    write '\' right before every dollar sign which appears in my api key.
    Have a nice day people, seriously, becasue I have been
    searching for clues for way too much time. 
    Thanks god there's alcohol.
*/

const { REACT_APP_JSONBinURI, REACT_APP_JSONBinAPIKEY } = process.env

export default class Writer extends Component {
  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
  }
  handleContentChange = (event) => {
    this.setState({ content: event.target.value })
  }
  handleSubmit = (event) => {
    let article = {
      title: this.state.title,
      content: this.state.content,
      id: new Date().getTime(),
    }
    axios
      .get(REACT_APP_JSONBinURI, {
        headers: { "secret-key": REACT_APP_JSONBinAPIKEY },
      })
      .then((response) => {
        let articlesList = response.data.articles
        articlesList.push(article)
        axios
          .put(
            REACT_APP_JSONBinURI,
            { articles: articlesList },
            { headers: { "secret-key": REACT_APP_JSONBinAPIKEY } }
          )
          .then(() => {
            alert("articolo mandato")
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
    event.preventDefault()
  }

  render() {
    return (
      <form className="border border-light p-5" onSubmit={this.handleSubmit}>
        <p className="h4 mb-4 text-left">Submit an article</p>
        <input
          type="text"
          id="formTitle"
          className="form-control mb-4"
          placeholder="Title"
          onChange={this.handleTitleChange}
        />
        <textarea
          type="text"
          id="formContent"
          className="form-control mb-4"
          onChange={this.handleContentChange}
          placeholder="Content"
        />
        <button className="btn btn-info btn-block my-4" type="submit">
          Send
        </button>
      </form>
    )
  }
}
