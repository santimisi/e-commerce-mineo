import React from 'react'
import { Link } from 'react-router-dom'

import './Item.css'
import './ItemCount'
import Card from 'react-bootstrap/Card'


function Item (props) {
  
    return (
        <Card style={{width : "15rem" , margin : "50px" }}>
          <Card.Img className='card-image' variant="top"  src={props.image} />
        <Card.Body>
          <Card.Title><Link to ={`/item/${props.id}`}><h2>{props.name}</h2></Link></Card.Title>
          <Card.Text>${props.price}</Card.Text>
        </Card.Body>
        </Card>
      );
    }
  
  export default Item;
  
