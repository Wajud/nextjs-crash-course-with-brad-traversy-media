import React from "react";
import ArticleStyles from "../src/styles/Article.module.css";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <div>
      <Link
        className={ArticleStyles.card}
        href={`/article/${article.id}`}
        //   as={`/article/${article.id}`}
      >
        {/* <a className={ArticleStyles.card}> */}
        <h3>{article.title} &arr;</h3>
        <p>{article.body}</p>
        {/* </a> */}
      </Link>
    </div>
  );
};

export default ArticleItem;
