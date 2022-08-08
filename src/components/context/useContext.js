import React, { createContext, useState } from 'react'



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
                prod.qty += item.qty            
            }
            return prod
        }))
        :
        setItems ([...items, { id: item.id, title: item.title, price: item.price, qty: qty }]);
        console.log(items) 
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clearItems = () => {
        setItems ([])
    }
    return (
        < CartContext.Provider value={{ items, addItem, removeItem,clearItems }}>
            {children}
        </ CartContext.Provider >
    )
}