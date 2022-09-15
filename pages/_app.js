import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'
import '../styles/globals.css'
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState()
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
    const token = localStorage.getItem('token')
    if (token) {
      setUser({ value: token })
    }
    setKey(Math.random())
  }, [])

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty
    }
    setSubTotal(subt)
  }

  const addToCart = (mangaCode, qty, price, name, lang, vol, img) => {
    let newCart = cart;
    if (mangaCode in cart) {
      newCart[mangaCode].qty = cart[mangaCode].qty + qty
    }
    else {
      newCart[mangaCode] = { qty: 1, price, name, lang, vol, img}
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const buyNow = (mangaCode, qty, price, name, lang, vol, img) => {
    let newCart = { mangaCode: { qty: 1, price, name, lang, vol, img } }
    setCart(newCart)
    saveCart(newCart)
    router.push('/cart')
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const removeFromCart = (mangaCode, qty, price, name, lang, vol, img) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (mangaCode in cart) {
      newCart[mangaCode].qty = cart[mangaCode].qty - qty
    }
    if (newCart[mangaCode]["qty"] <= 0) {
      delete newCart[mangaCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const logout = () => {
    setUser({ value: null })
    localStorage.removeItem('token')
    setKey(Math.random())
    router.push('/')
  }


  return (
  <>
  <LoadingBar
      color='#000000'
      waitingTime={400}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
    <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial:{
          opacity: 0,
          scale: .3
        },
        pageAnimate:{
          opacity: 1,
          scale: 1
        }
      }}>
    <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    </motion.div>
    <Footer/>
  </>
  )
}

export default MyApp
