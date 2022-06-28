import React, { useState, useEffect } from "react";
import styles from "../styles/login.module.css";
import Link from "next/link";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };
    let res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    setName('')
    setEmail('')
    setPassword('')
  };

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
          <form onSubmit={handleSubmit} method="POST">
            <label htmlFor="name">Name:</label>
            <input
              value={name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              type="text"
              id="email"
              name="email"
              autoComplete="email"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              value={password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
            />
            <button type="submit">Sign up</button>
          </form>
          <span>
            Already have an account? <Link href="/login">Log in</Link>
          </span>
        </div>
        <div className={styles.login_form_right}>
          <img
            src="https://media4.giphy.com/media/LvtxIRg1Ly96E/giphy.gif?cid=ecf05e4785namyo566o1iuan2a3uvbjcpqx8mpyuvy5c5wb4&rid=giphy.gif&ct=g"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
