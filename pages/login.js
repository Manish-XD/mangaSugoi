import styles from "../styles/login.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    if (e.target.name === "Email") {
      setEmail(e.target.value);
    } else if (e.target.name === "Password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    let res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    setEmail("");
    setPassword("");
    router.push(`/`);
    
      if(response.success){
        localStorage.setItem("token", response.token);
      }
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
          <h1>Log in</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Email">Email:</label>
            <input
              value={email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              type="text"
              id="Email"
              name="Email"
            />
            <label htmlFor="Password">Password:</label>
            <input
              value={password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              type="password"
              id="Password"
              name="Password"
            />
          <button type="submit">Log in</button>
          </form>
          <span>
            <Link href="/">Forgot Password?</Link>
          </span>
        </div>
        <div className={styles.login_form_right}>
          <img
            src="https://media1.giphy.com/media/n440jTfv4gpGK1LItq/giphy.gif?cid=ecf05e47rixwh6bvaio67jh42itq6oarnm52qrtahkx53iry&rid=giphy.gif&ct=g"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
