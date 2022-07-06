import React from 'react'
import ItemList from './ItemList'
import Item from './Item.js';
import { useState, useEffect } from 'react';

function ItemListContainer (props) {

  const [info, setInfo] = useState ([])

  useEffect (() => {
      setTimeout (() => {
      fetch('https://api.escuelajs.co/api/v1/products')
      .then((resp) => resp.json ())
      .then((data) => setInfo(data))
  }, 2000, [])})

  return (

    <div>

          < ItemList item={info} />


    </div>
    
  )
}

export default ItemListContainer
