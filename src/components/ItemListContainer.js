import React from 'react'
import Cards from './Card.js';
import ItemList from './ItemList'
import Item from './Item.js';
import { useState, useEffect } from 'react';

function ItemListContainer (props) {

  const [info, setInfo] = useState ([])

  useEffect (() => {
      setTimeout (() => {
      fetch('data.json')
      .then((resp) => resp.json ())
      .then((data) => setInfo(data))
  }, 2000, [])})


  return (

    <div>
      <p>Bienvenido, {props.nombre}, aca va a aparecer el catálogo <ItemList /></p>
      {info && info.map(i => <Item product={i.name} price={i.price} />)}
    </div>
    
  )
}

export default ItemListContainer
