import React from 'react'
import Cards from './Card.js';
import ItemList from './ItemList'

function ItemListContainer (props) {
  return (
    <p>Bienvenido, {props.nombre}, aca va a aparecer el catálogo <ItemList /></p>
    
  )
}

export default ItemListContainer
