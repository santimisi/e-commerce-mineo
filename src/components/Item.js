import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/useContext'
import './Item.css'
import './ItemCount'
import ItemCount from './ItemCount'
import ItemDetailContainer from './ItemDetailContainer'
import ItemDetails from './ItemDetails'


function Item (props, item) {
  const {addItem} = useContext(CartContext)
  
    return (
      <div className='Item'>
        
        <Link to ={`/item/${props.id}`}><h2>{props.name}</h2></Link>
        <img src={props.image} width="200" />
        <h4>${props.price}</h4>
        <h4>id: {props.id}</h4>
        <p>< ItemCount item={item} initial={1} addItem={addItem}  /></p>
        
      </div>
    );
  }

export default Item;
