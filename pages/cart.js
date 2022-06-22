import React from "react";
import styles from "../styles/cart.module.css";
import Link from 'next/link';

const Cart = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  return (
    <div className={styles.cart_container}>
      <div className={styles.left_sidebar}>
        <h2>Your cart</h2>
        <Link href="/">&larr; Keep Shopping</Link>
      </div>
      <div className={styles.right_sidebar}>
        {Object.keys(cart).length === 0 && <div>Your cart is empty!</div>}
        {Object.keys(cart).map((k) => {
          return (
            <div className={styles.cart_list} key={k}>
              <span>{cart[k].name}</span>
              <span onClick={() => {
                removeFromCart(
                  k,
                  1,
                  cart[k].price,
                  cart[k].name,
                  cart[k].lang,
                  cart[k].vol
                );
              }}>-</span>
              <span>{cart[k].qty}</span>
              <span onClick={() => {
                addToCart(
                  k,
                  1,
                  cart[k].price,
                  cart[k].name,
                  cart[k].lang,
                  cart[k].vol
                );
              }}>+</span>
              <span>{cart[k].lang}</span>
              <span>{cart[k].vol}</span>
              <span>₹{(parseInt(cart[k].qty)) * (parseInt(cart[k].price))}</span>
            </div>
          );
        })}
        <span>Subtotal: {subTotal}</span>
      </div>
    </div>
  );
};

export default Cart;
