import React from 'react'
import { useState, useEffect } from 'react'

import ItemDetails from './ItemDetails'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { getOneItem } from './services/firestore';




function ItemDetailContainer () {
  const [product, setProduct] = useState({});
    const [details, setDetails] = useState ([])
    const { productsId } = useParams();


    console.log(productsId)

const getItem = () => {
  
    getOneItem(productsId)
    .then((data) =>setProduct(data) )

}

useEffect(() => {
  setTimeout(() => {
    getItem(product);
  }, 2000);
 
}, [productsId]);

    console.log("producto seteados",product);

  
  return (
    <div className='ItemDetailContainer'>
      
     {/*  <button onClick={<Routes><Route path="/item/:productsId" element={< ItemDetails />} /></Routes>}>Detalles </button> */}
        < ItemDetails item={product}/>
    </div>
  )
}

export default ItemDetailContainer