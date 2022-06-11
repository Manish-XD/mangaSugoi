import React from "react";
import styles from "../styles/navbar.module.css";
import Script from "next/script";

const Navbar = () => {
  return (
    <>
      <Script strategy="lazyOnload">
        {`
        document.getElementById("shop-link").addEventListener("mouseover", mouseOver);

        document.getElementById("shop-link").addEventListener("mouseout", mouseOut);

        function mouseOver() {
          document.getElementById('shop').style.display = "flex";
          document.getElementById('shop').style.backgroundColor = "#f7f7f7";
          document.getElementById('nav').style.marginBottom = "0";
          document.getElementById('nav').style.borderTop = "0.5px solid rgb(211, 208, 208)";
          document.getElementById('nav').style.borderLeft = "0.5px solid rgb(211, 208, 208)";
          document.getElementById('nav').style.borderRight = "0.5px solid rgb(211, 208, 208)";
          document.getElementById('nav').style.borderBottom = "0";
          document.getElementById('shop').style.borderTop = "0";
          document.getElementById('shop').style.borderLeft = "0.5px solid rgb(211, 208, 208)";
          document.getElementById('shop').style.borderRight = "0.5px solid rgb(211, 208, 208)";
          document.getElementById('shop').style.borderBottom = "0.5px solid rgb(211, 208, 208)";
          document.getElementById('shop').style.marginLeft = "0.5rem";
          document.getElementById('shop').style.marginRight = "0.5rem";

        }
        
        function mouseOut() {
          document.getElementById("shop").style.display = "none";
        }
        `}
      </Script>
      <nav id="nav" className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img
              src="https://www.pngitem.com/pimgs/m/536-5365058_000-vector-logos-one-piece-doflamingo-jolly-roger.png"
              alt=""
            />
          </div>
          <ul>
            <li>
              <a href="/" id="shop-link">
                Shop
              </a>
            </li>
            <li>
              <a href="/">Trending</a>
            </li>
            <li>
              <a href="/">Special</a>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <span>Search</span>
          <span>My account</span>
          <div className={styles.cart}>
            <p>0</p>
          </div>
        </div>
      </nav>
      <div id="shop" className={styles.shop}>
        <div className={styles.card}>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/91ZiXDYRM6L.jpg"
            alt=""
          />
          <a href="/">Solo Leveling</a>
          <span>
            Genres: Action, Adventure, Award Winning, Supernatural, Monsters
          </span>
        </div>
        <div className={styles.card}>
          <img
            src="https://cdn.anime-planet.com/manga/primary/the-beginning-after-the-end-1.webp?t=1652139074"
            alt=""
          />
          <a href="/">The Beginning After the End</a>
          <span>
            Genres: Action, Adventure, Fantasy, School Life, Tragedy, Demons,
            Magic, Monsters, Reincarnation
          </span>
        </div>
        <div className={styles.card}>
          <img src="https://meo.comick.pictures/LNJD6.jpg?width=768" alt="" />
          <a href="/">Second Life Ranker</a>
          <span>
            Genres: Action, Adventure, Drama, Fantasy, Martial Arts,
            Supernatural, Demons, Magic, Monsters, Survival
          </span>
        </div>
        <div className={styles.card}>
          <img src="https://i.imgur.com/6to6EvQ.jpg" alt="" />
          <a href="/">Nano Machine</a>
          <span>Genres: Action, Adventure, Fantasy, Martial Arts, Sci-Fi</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
