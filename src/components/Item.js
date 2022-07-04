import React from 'react'
import { useEffect, useState } from 'react'
import './Item.css'
import './ItemCount'
import ItemCount from './ItemCount'
import ItemDetailContainer from './ItemDetailContainer'
import getItem from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'

function Item (props) {
    return (
      <div className='Item'>
      <p>Producto: {props.product}</p>
      <img src="{props.image}" width="200"/>
      <p>Precio: {props.price}</p>
      <p>detalles del producto: <ItemDetailContainer/></p>
      <p>id: {props.id}</p>
      
      <ItemCount />
      </div>
    );
  }

export default Item;
