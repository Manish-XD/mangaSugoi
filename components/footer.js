import React from "react";
import styles from "../styles/footer.module.css";
import Head from "next/head";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_links}>
        <div className={styles.left}>
          <div className={styles.about}>
            <h3 className={styles.footer_subhead}>ABOUT</h3>
            <ul>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
              <li>
                <Link href="/">Manga Sugoi Stories</Link>
              </li>
              <li>
                <Link href="/">Press</Link>
              </li>
              <li>
                <Link href="/">Manga Wholesale</Link>
              </li>
              <li>
                <Link href="/">Corporate Information</Link>
              </li>
            </ul>
          </div>
          <div className={styles.help}>
            <h3 className={styles.footer_subhead}>HELP</h3>
            <ul>
              <li>
                <Link href="/">Payments</Link>
              </li>
              <li>
                <Link href="/">Shipping</Link>
              </li>
              <li>
                <Link href="/">Cancellation & returns</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/">Report Infringement</Link>
              </li>
            </ul>
          </div>
          <div className={styles.policy}>
            <h3 className={styles.footer_subhead}>POLICY</h3>
            <ul>
              <li>
                <Link href="/">Return Policy</Link>
              </li>
              <li>
                <Link href="/">Terms of use</Link>
              </li>
              <li>
                <Link href="/">Security</Link>
              </li>
              <li>
                <Link href="/">Privacy</Link>
              </li>
              <li>
                <Link href="/">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <h3 className={styles.footer_subhead}>SOCIAL</h3>
            <ul>
              <li>
                <Link href="/">Facebook</Link>
              </li>
              <li>
                <Link href="/">Twitter</Link>
              </li>
              <li>
                <Link href="/">YouTube</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right_mail}>
            <p className={styles.footer_subhead}>Mail us:</p>
            <p className={styles.footer_subpara}>
              Manga Sugoi Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </p>
          </div>
          <div className={styles.right_address}>
            <p className={styles.footer_subhead}>Registered Office Address:</p>
            <p className={styles.footer_subpara}>
              Manga Sugoi Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India CIN :
              U51109KA2012PTC066107 Telephone: 044-45614700
            </p>
          </div>
        </div>
      </div>
      <hr/>
      <div className={styles.end_footer}>
        <span>💲 Become a seller</span>
        <span>🎁 Gift Cards</span>
        <span>❓ Help center</span>
        <span>© MangaSugoi.com</span>
        <img
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
