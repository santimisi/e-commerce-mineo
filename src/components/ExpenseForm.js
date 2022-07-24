import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext, CartProvider } from './context/useContext';
import db from './services/firestore';
import { getAllItems } from './services/firestore';
import { initializeApp } from 'firebase/app';
export const ExpenseForm = (props) => {
    const { items, removeItem, clearItems} = useContext(CartContext)
    const [ nombre , setNombre] = useState ("")
    const [ telefono , setTelefono] = useState ("")
    const [ email , setEmail] = useState ("")
    const [order, setNewOrderId] = useState ([])
    
    const nuevoNombre = (event) =>{
        setNombre(event.target.value)
    }
    const nuevoTelefono = (event) =>{
        setTelefono(event.target.value)
    }
    const nuevoEmail = (event) =>{
        setEmail(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventdefault();
    

    const newBuyer = {
        name: nombre,
        phone: telefono,
        email: email
    }
    const order = {
        buyer: newBuyer,
        
        items: items 
    }
    const ordersCollection = collection (db, "orders")
    addDoc(ordersCollection, order)
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
    <button type='submit'>Comprar</button>
</form></div>
  )
}
