import React from "react";
import styles from "../styles/shop.module.css";
import Product from "../models/Product";
import mongoose, { mongo } from "mongoose";
import Link from "next/link";

const Shop = ({products}) => {
  console.log(products)
  return (
    <div className={styles.shop}>
      <h1>Our Best Sellers:</h1>
      <hr />
      <div className={styles.row}>
        {products.map((item)=>{return <div key={item._id} className={styles.card}>
          <div >
            <Link href={`/product/${item.slug}`}><img src={item.img} alt="" /></Link>
            <p className={styles.chap}>Chapter {item.vol}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.rate_price}>
              <span className={styles.rate}>Ratings: {item.rating}</span>
              <span className={styles.price}>₹{item.price}</span>
            </div>
          </div>
        </div>})}
      </div>
    </div>
  );
};

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
}
  let products = await Product.find()
  return{
    props: {products: JSON.parse(JSON.stringify(products))}
  }
}

export default Shop;
