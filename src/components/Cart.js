import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext, CartProvider } from './context/useContext'
import { ExpenseForm } from './ExpenseForm';
import db, { getAllItems } from './services/firestore';

const Cart = () => {
    const { items, removeItem, clearItems, totalCompra} = useContext(CartContext)
    return (
        <div>
            {
                items.map((item) =>(
                    <div key={item.id}>
                        <h1>{item.qty}, {item.title}</h1>
                        <h2>${item.price * item.qty}</h2>
                        <h6><button onClick={() => removeItem(item.id)}>Borrar producto</button></h6>
                    </div>
                ) )
            }
            <h6><button onClick={() => clearItems()}>Vaciar Carrito</button></h6>
            <h2><span className="order-summary-values">Total ${items.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</span></h2>
            <ExpenseForm/>
        </div>
    )
}

export default Cart;