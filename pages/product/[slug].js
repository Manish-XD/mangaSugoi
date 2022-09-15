// import mongoose from "mongoose";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/product.module.css";
import mongoose from "mongoose";
import Product from "../../models/Product";
import Link from "next/link";

const Post = ({ addToCart, buyNow, product }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [service, setService] = useState(null);
  console.log(product);


  const checkAvailability = async () =>
  {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let pinJson = await pins.json();
    if(pinJson.includes(parseInt(pin)))
    {
      setService(true);
    }
    else
    {
      setService(false);
    }
  }

  // const buyNow = () => {
  //   addToCart(slug, 1, product.price, product.title, product.lang, product.vol);
  //   router.push("/checkout")
  // }

  return (
    <>
      {product.map((item)=>{return <div key={item.title} className={styles.container}>
        <img
          className={styles.bg_image}
          src={item.bgimg}
          alt=""
        />

        <div className={styles.product}>
          <img
            className={styles.product_img}
            src={item.img}
            alt=""
          />
          <div className={styles.details}>
            <h1>{item.title}</h1>
            <p>
              {item.desc}
            </p>
            <span>Demographic: {item.demographic}</span>
            <span>Published: {item.published}</span>
            <span>Status: {item.status}</span>
            <span>Ratings: {item.rating}</span>
            <span>
              Genres: {item.genre}
            </span>
            <div className={styles.lang_vol}>
              <span>Lang: </span>
              <Link href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Emoji_u1f1fa_1f1f8.svg/2048px-Emoji_u1f1fa_1f1f8.svg.png" alt="" /></Link>
              <Link href="/"><img src="https://cdn.countryflags.com/thumbs/japan/flag-waving-250.png" alt="" /></Link>
              
            </div>
            <div className={styles.price_buy}>
              <span>₹{item.price}</span>
              <button onClick={() => { buyNow(slug, 1, item.price, item.title, item.lang, item.vol, item.img)}}>Buy Now</button>
              <button onClick={() => { addToCart(slug, 1, item.price, item.title, item.lang, item.vol, item.img) }}>Add to cart</button>
            </div>
            <div className={styles.pin}>
              <input type="text" />
              <button>Check</button>
            </div>
          </div>
        </div>
      </div>})}
    </>
  );
};

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  let product = await Product.find({slug: context.query.slug})

  return{
    props: {product: JSON.parse(JSON.stringify(product))}
  }
}

export default Post;
