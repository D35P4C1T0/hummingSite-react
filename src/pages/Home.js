import React from "react";
import { ArticleList } from "../components/ArticleList";
// import { Dragemoji } from "../components/Dragemoji";

export const Home = () => {
  return (
    <div>
      {/* <div className="row">
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
      </div> */}
      <ArticleList />
      <br></br>

      {/* {articles.map((article) => {
        const { title, content, id } = article
        return <Materialcard content={content} title={title} key={id} />
      })}{" "} */}
    </div>
  );
};
