import React from "react";
import Article from "./Article";


function ArticleList({ posts }) {
  const eachArticle = posts?.map((article) => (
      <Article 
        key={article.id}
        title={article.title} 
        date={article.date}
        preview={article.preview}
        minutes={article.minutes}
      />
  ));

  return <main>{eachArticle}</main>;
};


export default ArticleList;