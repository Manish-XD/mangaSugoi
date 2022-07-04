import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

const Address = () => {
  return (
    <div>
        <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
        </Head>
        <script type="application/javascript" crossorigin="anonymous" src={`${process.env.PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.PAYTM_MID}.js`} onload="onScriptLoad();"></script>
    </div>
  )
}

export default Address