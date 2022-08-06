import React from 'react';
import { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext} from './context/useContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ItemDetails ({item}) {

  console.log("llega a detail",item);
  const [add, setAdd] = useState(false)

  const {addItem} = useContext(CartContext)

  const params = useParams() 
  const [detalles, setDetalles] = useState([])
  const onAdd = (numero) => {
    addItem(item, numero)
   }


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
  )
}
export default ItemDetails

