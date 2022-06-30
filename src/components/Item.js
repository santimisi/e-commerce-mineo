import React from 'react'
import { useEffect, useState } from 'react'
import Cards from './Card'
import './Item.css'
import './ItemCount'
import ItemCount from './ItemCount'

function Item (props) {
    return (
      <div className='Item'>
      <h2>Producto: {props.product}</h2>
      <img src="{props.img}" width="200"/>
      <h3>Precio: {props.price}</h3>
      <button>Detalles del producto</button>
      <ItemCount />
      
      </div>
    );
  }

export default Item;
