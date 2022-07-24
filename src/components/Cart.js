import React, {useContext, useState} from 'react';
import { CartContext } from './context/useContext'
import { ExpenseForm } from './ExpenseForm';

const Cart = () => {
    const { items, removeItem, clearItems} = useContext(CartContext)
    const {expenses, newExpense} = useState ([])
    const addExpenseHandler = (newExpense) => {
        setExpenses ([...expenses, newExpense])
    }
    const finalizarHandler = () => {
        setFinalCompra(true)
    }
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
            <ExpenseForm/>
        </div>
    )
}

export default Cart;