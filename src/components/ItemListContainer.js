import React from 'react'
import ItemList from './ItemList'
import Item from './Item.js';
import { useState, useEffect } from 'react';

function ItemListContainer (props) {

  const [info, setInfo] = useState ([])

  useEffect (() => {
      setTimeout (() => {
      fetch('https://fakestoreapi.com/products')
      .then((resp) => resp.json ())
      .then((data) => setInfo(data))
  }, 2000, [])})

  return (

    <div>
          <p>Bienvenido, aca va a aparecer el catálogo <ItemList /></p>
          {info && info.map(i => <Item product={i.title} id={i.id} />)}

    </div>
    
  )
}

export default ItemListContainer
