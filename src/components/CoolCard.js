import React from "react";
import "../style/cards.css";

export const CoolCard = (props) => {
  return (
    <article
      class="card"
      content={props.content}
      title={props.title}
      id={props.id}
    >
      <header class="card-header">
        <p>{props.title}</p>
        <h2>{props.content}</h2>
      </header>

      {/* <div class="card-author">
        <a class="author-avatar" href="/">
          <img src="https://api.adorable.io/avatars/172/3.png" alt="" />
        </a>
        <svg class="half-circle" viewBox="0 0 106 57">
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
        </svg>

        <div class="author-name">
          <div class="author-name-prefix">User</div>
          {props.author ? props.author : "Anon"}
        </div>
      </div> */}
      {/* <div class="tags">
        <a href="/">html</a>
        <a href="/">css</a>
        <a href="/">web-dev</a>
      </div> */}
    </article>
  );
};
