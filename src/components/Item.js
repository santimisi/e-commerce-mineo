<<<<<<< HEAD
import React from 'react'
<<<<<<< HEAD
import { useEffect, useState } from 'react'
=======
import { Link } from 'react-router-dom'
>>>>>>> dudas
=======
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/useContext'
>>>>>>> entregaduda
import './Item.css'
import './ItemCount'
import ItemCount from './ItemCount'
import ItemDetailContainer from './ItemDetailContainer'
<<<<<<< HEAD
import getItem from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
=======
import ItemDetails from './ItemDetails'

>>>>>>> dudas

function Item (props, item) {
  const {addItem} = useContext(CartContext)
  
    return (
      <div className='Item'>
<<<<<<< HEAD
      <p>Producto: {props.product}</p>
      <img src="{props.image}" width="200"/>
      <p>Precio: {props.price}</p>
      <p>detalles del producto: <ItemDetailContainer/></p>
      <p>id: {props.id}</p>
      
      <ItemCount />
=======
        
        <Link to ={`/item/${props.id}`}><h2>{props.name}</h2></Link>
        <img src={props.image} width="200" />
        <h4>${props.price}</h4>
        <h4>id: {props.id}</h4>
        <p>< ItemCount item={item} initial={1} addItem={addItem}  /></p>
        
>>>>>>> dudas
      </div>
    );
  }

export default Item;