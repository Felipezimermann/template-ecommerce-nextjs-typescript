import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header  from '../components/header'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
 
  const [cart, setcart] = useState(0)
  pageProps = {cart,setcart}
  
  return(
    <>
      <Header shoppingCart={cart} />
      <Component {...pageProps} />
      <div>testes</div>
    </>
  ) 
}

export default MyApp
