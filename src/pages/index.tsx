import { useState } from 'react'
import Car from '../components/shop/Car'

interface home{
  shopValue : (value:number)=>{}
}

export default function Home(prop:home){

  const [nome, setNome] = useState('')
  const [value, setValue] = useState(0)

  function teste(){
    prop.shopValue(value)
    setValue(value +1)
  }

  return(
    <>
    <button onClick={teste}>teste</button>
      <Car value={value}/>
      <h1>felipez teste ola</h1>
    </>
  )
}