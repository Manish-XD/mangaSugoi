import React from "react";
import styles from "../styles/navbar.module.css";
import Script from "next/script";
import Link from 'next/link';
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

const Navbar = ({logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const [display, setdisplay] = useState("flex");
  const [showcart, setshowcart] = useState("translateX(100rem)");
  const toggleCart = () => {
    if (showcart === "translateX(0)") {
        setshowcart("translateX(100rem)");
    } else {
        setshowcart("translateX(0)");
    }
}
  useEffect(() => {
    if(user.value===null){
      setdisplay("flex");
    }
    else{
      setdisplay("none");
    }
  }, [])
  console.log(cart);
  return (
    <>
      <Script src="/script.js"></Script>
      <nav id="nav" className={styles.nav}>
        <div className={styles.mainnav}>
          <div className={styles.left}>
            <Link href="/">
            <img
              src="https://www.pngitem.com/pimgs/m/536-5365058_000-vector-logos-one-piece-doflamingo-jolly-roger.png"
              alt=""
              style={{cursor: "pointer"}}
            />
            </Link>
            <Link href="/"><span style={{marginLeft: "1.5rem", cursor: "pointer"}}>Manga Sugoi</span></Link>
            <ul>
              <li id="shop-link">
                <Link  href="/shop">Shop</Link>
              </li>
              <li id="trending-link">
                <Link href="/">Trending</Link>
              </li>
              <li id="latest-link">
                <Link href="/">Latest</Link>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <span id="search-link">Search</span>
            <span id="account-link">My Account</span>
            <div id="cart_btn" className={styles.cart} onClick={()=>toggleCart()}>
              <span>{Object.keys(cart).length}</span>
            </div>
          </div>
        </div>
        <div id="shop" className={styles.shop}>
          <div className={styles.card}>
            <Link href="/product/solo-leveling">
              <img
                src="https://meo.comick.pictures/jmrRD.jpg?width=768"
                alt=""
                id="solo-img"
              />
            </Link>
              <p id="solo-link">Solo Leveling</p>
            <p className={styles.genre}>
              Genres: Action, Adventure, Award Winning, Drama, Fantasy,
              Supernatural, Magic, Monsters
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/product/The-Beginning-After-the-End">
              <img
                src="https://meo.comick.pictures/5oQEp.png?width=768"
                alt=""
                id="beg-img"
              />
            </Link>
              <p id="beg-link">The Beginning After the End</p>
            <p className={styles.genre}>
              Genres: Action, Adventure, Fantasy, School Life, Tragedy, Demons,
              Magic, Monsters, Reincarnation
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/product/Nano-Machine">
              <img
                src="https://meo.comick.pictures/wNEdM.jpg?width=768"
                alt=""
                id="nano-img"
              />
            </Link>
              <p id="nano-link">Nano Machine</p>
            <p className={styles.genre}>
              Genres: Action, Adventure, Fantasy, Martial Arts, Sci-Fi, Wuxia
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/product/Second-Life-Ranker">
              <img
                src="https://meo.comick.pictures/LNJD6.jpg?width=768"
                alt=""
                id="sec-img"
              />
            </Link>
              <p id="sec-link">Second Life Ranker</p>
            <p className={styles.genre}>
              Genres: Action, Adventure, Drama, Fantasy, Martial Arts,
              Supernatural, Demons, Magic, Monsters, Survival
            </p>
          </div>
        </div>
        <div id="search" className={styles.search}>
          <form action="">
            <input placeholder="Start typing here what you're looking for..." type="text" />
          </form>
        </div>
        <div id="account" className={styles.account}>
          <p>Create an account or log in to <strong>view your orders, return or adjust your personal information.</strong></p>
          {user.value && <div className={styles.logout}>
            <button>My account</button>
            <Link href="/orders"><button>Orders</button></Link>
            <button onClick={logout} >Logout</button>
          </div>}
          <div style={{display: `${display}`}} className={styles.btn}>
          <Link href="/signup"><span id="account_btn">Create Account</span></Link>
          <Link href="/login"><button id="login_btn">Login</button></Link>
          </div>
        </div>
      </nav>
      <div id="cart_menu" className={styles.cart_menu} style={{transform: `${showcart}`}}>
        <p id="close_btn" className={styles.close_btn} onClick={()=>toggleCart()}>X</p>
        <div>
            {(Object.keys(cart).length === 0 && <div>Your cart is empty!</div>)}
            {Object.keys(cart).map((k) => {
              return <div key={k} className={styles.cart_items}>
                <img src={cart[k].img} alt="abc" />
                <div >
                  <h3>{cart[k].name}<span>₹{(parseInt(cart[k].qty))*(parseInt(cart[k].price))}</span></h3>
                  <span>qty: {cart[k].qty}</span>
                  <span>Lang: {cart[k].lang}</span>
                  <span>Vol: {cart[k].vol}</span>
                </div>
              </div>
            })}
          </div>
          <div>Subtotal: {subTotal}</div>
        <hr />
        <Link href="/cart">
          <div className={styles.checkout_btn}>
            <p>Checkout</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
