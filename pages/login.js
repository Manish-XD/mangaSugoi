import React from "react";
import styles from "../styles/login.module.css";
import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.login}>
      <img
        className={styles.login_bg}
        src="https://images8.alphacoders.com/737/737474.png"
        alt=""
      />
      <div className={styles.login_form}>
        <div className={styles.login_form_left}>
          <img
            src="https://www.pngitem.com/pimgs/m/536-5365058_000-vector-logos-one-piece-doflamingo-jolly-roger.png"
            alt=""
          />
          <h1>Log in</h1>
          <form action="">
          <label htmlFor="Email">Email:</label>
          <input placeholder="Enter Your Email" type="text" id="Email" name="Email" />
          <label htmlFor="Password">Password:</label>
          <input placeholder="Enter Your Password" type="password" id="Password" name="Password" />
          </form>
          <button>Log in</button>
          <span>
           <Link href="/">Forgot Password?</Link>
          </span>
        </div>
        <div className={styles.login_form_right}>
          <img src="https://media1.giphy.com/media/n440jTfv4gpGK1LItq/giphy.gif?cid=ecf05e47rixwh6bvaio67jh42itq6oarnm52qrtahkx53iry&rid=giphy.gif&ct=g" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
