/* eslint-disable react/prop-types */
import classes from "./RankArticleWrapper.module.css";

export default function RankArticleWrapper({ rankArticleList }) {
  return (
    <>
      {rankArticleList.map((article, index) => (
        <li className={classes.list} key={article.header}>
          <img src={article.image} alt="image" />
          <article className={classes.article}>
            <h1>{`0${index + 1}`}</h1>
            <a href="#">{article.header}</a>
            <p>{article.content}</p>
          </article>
        </li>
      ))}
    </>
  );
}
