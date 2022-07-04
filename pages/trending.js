import React from 'react';
import styles from "../styles/shop.module.css";
import Link from 'next/link';

const Trending = () => {
  return (
    <div className={styles.shop}>
      <h1>Trending Collections:</h1>
      <hr />
      <div className={styles.row}>
        <div className={styles.card}>
          <Link href="/">
            <img src="https://meo.comick.pictures/5owqn.jpg?width=768" alt="" />
            <p className={styles.chap}>Chapter 93</p>
            <h3 className={styles.title}>Superhuman Battle</h3>
            <div className={styles.rate_price}>
              <span className={styles.rate}>Ratings: 4.5</span>
              <span className={styles.price}>₹449</span>
            </div>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/">
            <img src="https://meo.comick.pictures/5owqn.jpg?width=768" alt="" />
            <p className={styles.chap}>Chapter 93</p>
            <h3 className={styles.title}>Superhuman Battle</h3>
            <div className={styles.rate_price}>
              <span className={styles.rate}>Ratings: 4.5</span>
              <span className={styles.price}>₹449</span>
            </div>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/">
            <img src="https://meo.comick.pictures/5owqn.jpg?width=768" alt="" />
            <p className={styles.chap}>Chapter 93</p>
            <h3 className={styles.title}>Superhuman Battle</h3>
            <div className={styles.rate_price}>
              <span className={styles.rate}>Ratings: 4.5</span>
              <span className={styles.price}>₹449</span>
            </div>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/">
            <img src="https://meo.comick.pictures/5owqn.jpg?width=768" alt="" />
            <p className={styles.chap}>Chapter 93</p>
            <h3 className={styles.title}>Superhuman Battle</h3>
            <div className={styles.rate_price}>
              <span className={styles.rate}>Ratings: 4.5</span>
              <span className={styles.price}>₹449</span>
            </div>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/">
            <img src="https://meo.comick.pictures/5owqn.jpg?width=768" alt="" />
            <p className={styles.chap}>Chapter 93</p>
            <h3 className={styles.title}>Superhuman Battle</h3>
            <div className={styles.rate_price}>
              <span className={styles.rate}>Ratings: 4.5</span>
              <span className={styles.price}>₹449</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Trending