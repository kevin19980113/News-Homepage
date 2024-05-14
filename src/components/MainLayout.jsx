import classes from "./MainLayout.module.css";
import MainArticleWrapper from "./MainArticleWrapper.jsx";
import ListArticleWrapper from "./ListArticleWrapper.jsx";
import RankArticleWrapper from "./RankArticleWrapper.jsx";
import { articleList } from "../data/articleList.js";

export default function MainLayout() {
  return (
    <div className={classes.mainLayout}>
      <div className={classes.firstLayer}>
        <MainArticleWrapper />
        <ListArticleWrapper newArticleList={articleList.new} />
      </div>
      <div className={classes.secondLayer}>
        <ul>
          <RankArticleWrapper rankArticleList={articleList.rank} />
        </ul>
      </div>
      <footer className={classes.footer}>
        <p>
          challenged by{" "}
          <a href="https://www.frontendmentor.io/" target="_blank">
            Frontend Mentor
          </a>{" "}
          coded by{" "}
          <a href="https://github.com/kevin19980113" target="_blank">
            <span className={classes.underline}>Kevin Lee</span>
          </a>
        </p>
      </footer>
    </div>
  );
}
