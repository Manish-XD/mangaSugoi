import React from "react";
import styles from "../styles/navbar.module.css";
import Script from "next/script";
import Link from 'next/link';

const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal }) => {
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
            <span>Manga Sugoi</span>
            <ul>
              <li id="shop-link">
                <Link  href="/shop">Shop</Link>
              </li>
              <li id="trending-link">
                <Link href="/trending">Trending</Link>
              </li>
              <li id="latest-link">
                <Link href="/latest">Latest</Link>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <span id="search-link">Search</span>
            <span id="account-link">My Account</span>
            <div id="cart_btn" className={styles.cart}>
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
        <div id="search" className={styles.search}>
          <form action="">
            <input placeholder="Start typing here what you're looking for..." type="text" />
          </form>
        </div>
      </nav>
      <div id="cart_menu" className={styles.cart_menu}>
        <p id="close_btn" className={styles.close_btn}>X</p>
        <ol>
            {(Object.keys(cart).length === 0 && <div>Your cart is empty!</div>)}
            {Object.keys(cart).map((k) => {
              return <li key={k}>
                <div>
                  <div>{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
                </div>
              </li>
            })}
          </ol>
          <div>Subtotal: {subTotal}</div>
        <hr />
        <a href="/">
          <div className={styles.checkout_btn}>
            <p>Checkout</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Navbar;
