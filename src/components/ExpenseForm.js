import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from './context/useContext';
import db from './services/firestore';


export const ExpenseForm = (props) => {
    const { items, totalCompra} = useContext(CartContext)
    const [ nombre , setNombre] = useState ("")
    const [ telefono , setTelefono] = useState ("")
    const [ email , setEmail] = useState ("")
    const [orderId, setNewOrderId] = useState ("")
    const [fecha, setFecha] = useState ([])

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
    <div>
        <form onSubmit={submitHandler}>
    <label>Nombre y Apellido</label>
    <input type='text'
    value={nombre}
    onChange={nuevoNombre}/>
    <br></br>
    <label>Teléfono</label>
    <input type='number' 
    value={telefono}
    onChange={nuevoTelefono}/>
    <br></br>
    <label>E-mail</label>
    <input type='email' 
    value={email}
    onChange={nuevoEmail}/>
    <label>Fecha</label>
    <input type='date' 
    min='2019-01-01'
    max='2022-12-31'
    value={fecha}
    onChange={nuevaFecha}/>
    <button type='submit'>Comprar</button>

    <h6 className='idcompra' style={{display: checkData}}>Gracias por la compra! Su código de seguimiento es: {orderId}</h6>
    
</form></div>
  )
}
