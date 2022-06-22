import React from "react";
import styles from "../styles/login.module.css";
import Link from "next/link";

const Signup = () => {
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
          <h1>Create Account</h1>
          <form action="">
          <label htmlFor="Name">Name:</label>
          <input placeholder="Enter Your Name" type="text" id="Name" name="Name" />
          <label htmlFor="Email">Email:</label>
          <input placeholder="Enter Your Email" type="text" id="Email" name="Email" />
          <label htmlFor="Password">Password:</label>
          <input placeholder="Enter Your Password" type="password" id="Password" name="Password" />
          </form>
          <button>Sign up</button>
          <span>
            Already have an account? <Link href="/login">Log in</Link>
          </span>
        </div>
        <div className={styles.login_form_right}>
          <img src="https://media4.giphy.com/media/LvtxIRg1Ly96E/giphy.gif?cid=ecf05e4785namyo566o1iuan2a3uvbjcpqx8mpyuvy5c5wb4&rid=giphy.gif&ct=g" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
