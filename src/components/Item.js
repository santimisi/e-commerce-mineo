import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import './ItemCount'
import ItemCount from './ItemCount'
import ItemDetailContainer from './ItemDetailContainer'
import ItemDetails from './ItemDetails'


function Item (props) {
    return (
      <div className='Item'>
        <h2>Producto: {props.name}</h2>
        <h4>Precio: {props.price}</h4>
        <Link to ={`/item/${props.id}`}><h4>detalles del producto: <ItemDetailContainer/></h4></Link>
        <h4>id: {props.id}</h4>
        <p><ItemCount /></p>
        
      </div>
    );
  }

export default Item;
