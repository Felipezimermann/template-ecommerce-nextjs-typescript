import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header  from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {
  function teste(){

  }
  return(
    <>
      <Header shopValue={0} />
      <Component {...pageProps } />
    </>
  ) 
}

export default MyApp
