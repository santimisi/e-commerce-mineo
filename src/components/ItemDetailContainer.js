import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import Item from './Item'
import ItemDetails from './ItemDetails'
import { Link, Route, Routes } from 'react-router-dom'



function ItemDetailContainer () {
    
    const [details, setDetails] = useState ([])

const getItem = () => {
    fetch('https://fakestoreapi.com/products')
    .then((resp) => {return resp.json ()})
    .then((data) => { const ItemDescription = data.map ((detailData) =>  <ItemDetails description={detailData.description} image={detailData.image} price={detailData.price} id={detailData.id} />

        
    )
    setDetails (ItemDescription)})};



  return (
    <div className='ItemDetailContainer'>
      
      <button onClick={<Routes><Route path="/item/:productsId" element={< ItemDetails />} /></Routes>}>Detalles </button>
        <ItemDetails description={details}/>
    </div>
  );
}

export default ItemDetailContainer

