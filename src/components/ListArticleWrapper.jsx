/* eslint-disable react/prop-types */
import classes from "./ListArticleWrapper.module.css";

export default function ListArticleWrapper({ newArticleList }) {
  return (
    <article className={classes.article}>
      <h1>New</h1>
      <ul className={classes.articleList}>
        {newArticleList.map((article, index) => (
          <>
            <li className={classes.articleItem} key={index}>
              <a href="#">{article.header}</a>
              <p>{article.content}</p>
            </li>
            {index < newArticleList.length - 1 && <hr />}
          </>
        ))}
      </ul>
    </article>
  );
}
