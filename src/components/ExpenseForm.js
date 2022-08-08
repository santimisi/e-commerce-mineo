import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { CartContext } from './context/useContext';
import db from './services/firestore';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


export const ExpenseForm = ({}) => {
    const { items, totalCompra} = useContext(CartContext)
    const [ nombre , setNombre] = useState ("")
    const [ telefono , setTelefono] = useState ("")
    const [ email , setEmail] = useState ("")
    const [orderId, setNewOrderId] = useState ("")
    const [fecha, setFecha] = useState ([])
    const [showed, setShowed] = useState(false);
    
    const checkData = orderId == 0 ? "none" : "block"

  
    const nuevoNombre = (event) =>{
        setNombre(event.target.value)
    }
    const nuevoTelefono = (event) =>{
        setTelefono(event.target.value)
    }
    const nuevoEmail = (event) =>{
        setEmail(event.target.value)
    }
    const nuevaFecha = (event) => {
        setFecha(event.target.value)
    }
    
    const submitHandler = (event) =>{
        event.preventDefault();
    
        const newBuyer = {
            name: nombre,
            phone: telefono,
            email: email,
            fecha: fecha
        }
        const order = {
            buyer: newBuyer,      
            items: items,
            total: totalCompra
        }
        const ordersCollection = collection (db, "orders")
        addDoc(ordersCollection, order).then((doc) =>  setNewOrderId(doc.id)) 
        setNombre ('')
        setTelefono ('')
        setEmail ('')

    }

    

  return (
    <>
    <main>
        <div style={showed ? { display: "none" } : { display: "block" }}>
            <div style={{border: "3px solid black" , textAlign:"center", width:"50%", margin:"0 auto"}}>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Enter name"  value={nombre} onChange={nuevoNombre}/>
                    </Form.Group>
                        <br></br>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="number" placeholder="Enter telephone"  value={telefono} onChange={nuevoTelefono}/>
                    </Form.Group>
                        <br></br>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={nuevoEmail}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="dob">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date" placeholder="Enter email" name="dob" value={fecha} onChange={nuevaFecha} min='2019-01-01' max='2022-12-31'/>
                    </Form.Group>
                <Button variant='success' type='submit' onClick={(e) => setShowed(true)}>Comprar</Button>
                </Form>
            </div>
        </div>
        
        <div>
            <h6 className='idcompra' style={{display: checkData}}>Gracias por la compra! Su código de seguimiento es: {orderId}</h6>
        </div>
    </main>
    </>

);
  }
