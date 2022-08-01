import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext, CartProvider } from './context/useContext';
import db from './services/firestore';
import { getAllItems } from './services/firestore';
import { initializeApp } from 'firebase/app';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
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
        event.preventDefault();
    

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
    addDoc(ordersCollection, order).then((doc) => setNewOrderId(doc.id))
    setNombre ('')
    setTelefono ('')
    setEmail ('')
}
useEffect (() => {
    const params = useParams()
    const q = query(collection(db,"orders"), where (id == params.idProduct))
    getDocs(q).then((snapshot) => {
        CartProvider(snapshot.docs.map((doc) => {return {...doc.data(), id: doc.id}}))
    })
}, [])
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
