import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Item from './Item';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import ItemDetailContainer from './ItemDetailContainer';

function ItemDetails (idetail) {
  return (
    <div>
        <img src={idetail.image} width="200" />
        <p>Detalle del producto: {idetail.description} </p>
        <p>Precio del producto: {idetail.price}</p>
    </div>
=======
import { useEffect, useState, useContext } from 'react';
import ItemDetailContainer from './ItemDetailContainer';
=======
import { useState, useContext } from 'react';
>>>>>>> entregafirebase
import { Link, useParams } from 'react-router-dom';
=======
import { useContext } from 'react';
>>>>>>> trabajomejorado
import ItemCount from './ItemCount';
import { CartContext} from './context/useContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ItemDetails ({item}) {

  console.log("llega a detail",item);
 

  const {addItem} = useContext(CartContext)




  return (
    <>
<Container>
  <Container style={{border: "3px solid black", borderRadius:"10px"}}>
    <Row>
      <Col style={{margin:"5px"}}><img src={item.image} width="200" /></Col>
      <Col xs={6}><h4> {item.title} </h4>
      <p>{item.description} </p>
      <h4 style={{fontWeight:"bold"}}>${item.price}</h4>
      </Col>
      <Col style={{margin: "30px"}}>
    {
              < ItemCount item={item} initial={1} addItem={addItem}  />
              
              }</Col>
    </Row>

  </Container>
</Container>
      
    </>
>>>>>>> dudas
  )
}
export default ItemDetails

