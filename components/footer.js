import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_links}>
        <div className={styles.left}>
          <div className={styles.about}>
            <h3 className={styles.footer_subhead}>ABOUT</h3>
            <ul>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Manga Sugoi Stories</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">Manga Wholesale</a>
              </li>
              <li>
                <a href="/">Corporate Information</a>
              </li>
            </ul>
          </div>
          <div className={styles.help}>
            <h3 className={styles.footer_subhead}>HELP</h3>
            <ul>
              <li>
                <a href="/">Payments</a>
              </li>
              <li>
                <a href="/">Shipping</a>
              </li>
              <li>
                <a href="/">Cancellation & returns</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Report Infringement</a>
              </li>
            </ul>
          </div>
          <div className={styles.policy}>
            <h3 className={styles.footer_subhead}>POLICY</h3>
            <ul>
              <li>
                <a href="/">REturn Policy</a>
              </li>
              <li>
                <a href="/">Terms of use</a>
              </li>
              <li>
                <a href="/">Security</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <h3 className={styles.footer_subhead}>SOCIAL</h3>
            <ul>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
              <li>
                <a href="/">YouTube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right_mail}>
            <p>Mail us:</p>
            <p>
              Manga Sugoi Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </p>
          </div>
          <div className={styles.right_address}>
            <p>Registered Office Address:</p>
            <p>
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
        <span>Become a seller</span>
        <span>Gift Cards</span>
        <span>Help center</span>
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
