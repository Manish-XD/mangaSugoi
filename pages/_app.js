import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
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

  const addToCart = (mangaCode, qty, price, name, lang, vol) => {
    let newCart = cart;
    if (mangaCode in cart) {
      newCart[mangaCode].qty = cart[mangaCode].qty + qty
    }
    else {
      newCart[mangaCode] = { qty: 1, price, name, lang, vol }
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const buyNow = (mangaCode, qty, price, name, lang, vol) => {
    let newCart = { mangaCode: { qty: 1, price, name, lang, vol } }
    setCart(newCart)
    saveCart(newCart)
    router.push('/checkout')
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const removeFromCart = (mangaCode, qty, price, name, lang, vol) => {
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


  return (
  <>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>
    <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer/>
  </>
  )
}

export default MyApp
