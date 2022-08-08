<<<<<<< HEAD
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
=======
import React from 'react'
import { Link } from 'react-router-dom'

>>>>>>> trabajomejorado
import './Item.css'
import './ItemCount'
<<<<<<< HEAD
import ItemCount from './ItemCount'
import ItemDetailContainer from './ItemDetailContainer'
<<<<<<< HEAD
import getItem from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
=======
import ItemDetails from './ItemDetails'
=======
import Card from 'react-bootstrap/Card'
>>>>>>> entregafirebase

>>>>>>> dudas

function Item (props) {
  
    return (
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
        <Card style={{width : "15rem" , margin : "20px" }}>
=======
        <Card style={{width : "15rem" , margin : "50px" }}>
>>>>>>> trabajomejorado
          <Card.Img className='card-image' variant="top"  src={props.image} />
        <Card.Body>
          <Card.Title><Link to ={`/item/${props.id}`}><h2>{props.name}</h2></Link></Card.Title>
          <Card.Text>${props.price}</Card.Text>
        </Card.Body>
        </Card>
      );
    }
  
  export default Item;
  
>>>>>>> entregafirebase
