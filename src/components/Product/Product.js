import {useState, useEffect} from 'react'
import { getBlusas } from '../../asyncMock'
import Blusas from './Blusas'

const Product = () => {
  const [Product, setProduct] = useState ([])

  useEffect(() => {
    getBlusas()
      .then(response => {
        setProduct(response)
        console.log(getBlusas)
      })
      .catch(error => {
        console.log(error)
      })  
}, [])

  return(
    <div>
      <h1>BLusasss</h1>
      <Blusas productos={Product}/>
    </div>
  )
}

export default Product