import React, {useContext, useState} from 'react';
import { CartContext } from './context/useContext'
import { ExpenseForm } from './ExpenseForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import Button from "@material-ui/core/Button";


const Cart = () => {

    const { items, removeItem, clearItems, totalCompra} = useContext(CartContext)
    return (
        <>
<Container>
  <Container>
  {
                items.map((item) =>(
                    <div key={item.id}>
                        
    <Row>
        <Col style={{margin:"5px"}}><img src={item.image} width="100" /></Col>
        <Col xs={6}><h4> {item.qty}  {" "} {item.title} </h4>
        <h4 style={{fontWeight:"bold"}}>${item.price * item.qty}</h4>
        </Col>
        <Col style={{margin: "30px"}}>
        <Button style={{backgroundColor:"red"}} variant="contained" onClick={() => removeItem(item.id)}>Borrar producto
        <DeleteIcon fontSize="small" /></Button>
        </Col>
    </Row>
    </div>
    ) )
}

  </Container>
</Container>
            <Button style={{backgroundColor:"red"}} variant="contained" onClick={() => clearItems()}>Vaciar Carrito<DeleteSweepIcon fontSize="small" /></Button>
            <h2><span className="order-summary-values">Total ${totalCompra}</span></h2>
            <ExpenseForm/>
</>
    )
}
export default Cart;
