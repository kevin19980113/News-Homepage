/* eslint-disable react/prop-types */
import { useMediaQuery } from "react-responsive";
import mainDesktopImg from "../assets/images/image-web-3-desktop.jpg";
import mainMobileImg from "../assets/images/image-web-3-mobile.jpg";
import classes from "./MainArticleWrapper.module.css";

export default function MainArticleWrapper() {
  const isMobile = useMediaQuery({ maxWidth: "576px" });
  const isDesktop = useMediaQuery({ minWidth: "1240px" });

  return (
    <article className={classes.article}>
      <img
        src={isMobile ? mainMobileImg : mainDesktopImg}
        alt="main image"
        className={classes.image}
      />
      <div className={classes.content}>
        <h1 className={classes.head}>
          The Bright
          {isDesktop && <br />} Future of
          {isDesktop && <br />} Web 3.0?
        </h1>
        <section className={classes.paragraph}>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>READ MORE</button>
        </section>
      </div>
    </article>
  );
}
