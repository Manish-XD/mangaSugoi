import React from "react";
import styles from "../styles/navbar.module.css";
import Script from "next/script";

const Navbar = () => {
  return (
    <>
      <Script src="/script.js"></Script>
      <nav id="nav" className={styles.nav}>
        <div className={styles.mainnav}>
          <div className={styles.left}>
            <img
              src="https://www.pngitem.com/pimgs/m/536-5365058_000-vector-logos-one-piece-doflamingo-jolly-roger.png"
              alt=""
            />
            <ul>
              <li id="shop-link">
                <a  href="/">Shop</a>
              </li>
              <li id="trending-link">
                <a href="/">Trending</a>
              </li>
              <li id="latest-link">
                <a href="/">Latest</a>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <span id="search-link">Search</span>
            <span id="account-link">My Account</span>
            <div className={styles.cart}>
              <span>0</span>
            </div>
          </div>
        </div>
        <div id="shop" className={styles.shop}>
          <div className={styles.card}>
            <a href="/">
              <img
                src="https://meo.comick.pictures/jmrRD.jpg?width=768"
                alt=""
                id="solo-img"
              />
              <p id="solo-link">Solo Leveling</p>
            </a>
            <p className={styles.genre}>
              Genres: Action, Adventure, Award Winning, Drama, Fantasy,
              Supernatural, Magic, Monsters
            </p>
          </div>
          <div className={styles.card}>
            <a href="/">
              <img
                src="https://meo.comick.pictures/5oQEp.png?width=768"
                alt=""
                id="beg-img"
              />
              <p id="beg-link">The Beginning After the End</p>
            </a>
            <p className={styles.genre}>
              Genres: Action, Adventure, Fantasy, School Life, Tragedy, Demons,
              Magic, Monsters, Reincarnation
            </p>
          </div>
          <div className={styles.card}>
            <a href="/">
              <img
                src="https://meo.comick.pictures/wNEdM.jpg?width=768"
                alt=""
                id="nano-img"
              />
              <p id="nano-link">Nano Machine</p>
            </a>
            <p className={styles.genre}>
              Genres: Action, Adventure, Fantasy, Martial Arts, Sci-Fi, Wuxia
            </p>
          </div>
          <div className={styles.card}>
            <a href="/">
              <img
                src="https://meo.comick.pictures/LNJD6.jpg?width=768"
                alt=""
                id="sec-img"
              />
              <p id="sec-link">Second Life Ranker</p>
            </a>
            <p className={styles.genre}>
              Genres: Action, Adventure, Drama, Fantasy, Martial Arts,
              Supernatural, Demons, Magic, Monsters, Survival className={styles.genre}
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
