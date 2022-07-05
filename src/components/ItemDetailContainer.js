import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import Item from './Item'
import ItemDetails from './ItemDetails'



function ItemDetailContainer () {
    
    const [details, setDetails] = useState ([])

const getItem = () => {
    fetch('https://fakestoreapi.com/products')
    .then((resp) => {return resp.json ()})
    .then((data) => { const ItemDescription = data.map ((detailData) =>  <ItemDetails description={detailData.description} image={detailData.image} price={detailData.price} />

        
    )
    setDetails (ItemDescription)})}


  return (
    <div>
        <button onClick={getItem}>Detalles</button>
        <ItemDetails description={details}/>
    </div>
  );
}

export default ItemDetailContainer