import { getDocs, query, where } from 'firebase/firestore'
import React, { createContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../services/firestore'


export const CartContext = createContext ([])

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState ([])

    
    const isInCart = (id) => {
        const found = items.find (item => item.id === id);
        return found;
    }

    const addItem = (item, qty) => {
        console.log("llega a context",item);
        console.log(qty);
        isInCart(item.id)
        ?
        setItems(items.map((prod) => {
            if (prod.id === item.id) {
                const copyItem = {...items};
               copyItem.qty += item.qty     
               return copyItem     
            }
        }))
        :
        console.log("veo cantidad", qty);
        console.log("compruebo item",items);
        setItems ([...items, { id: item.id, title: item.title, price: item.price, qty: qty }]);
       console.log(items)
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clearItems = () => {
        setItems ([])
    }
    const totalCantidad = () => {
        return items.reduce((acc, item) => acc + item.qty, 0)
      }
    const totalCompra = () => {
        return items.reduce((acc, item) => acc + item.price * item.qty, 0)
      }

    return (
        < CartContext.Provider value={{ items, addItem, removeItem,clearItems, totalCantidad, totalCompra }}>
            {children}
        </ CartContext.Provider >
    )
}