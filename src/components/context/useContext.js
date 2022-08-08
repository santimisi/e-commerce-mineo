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
                const copyItem = {...items};
               copyItem.qty += item.qty     
               return copyItem     
            }
        }))
        :
        console.log("veo cantidad", qty);
        console.log("compruebo item",items);
        setItems ([...items, { id: item.id, title: item.title, price: item.price, qty: qty, image: item.image }]);
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
    let totalCompra =
        items.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)
    

    return (
        < CartContext.Provider value={{ items, addItem, removeItem,clearItems, totalCantidad, totalCompra }}>
            {children}
        </ CartContext.Provider >
    )
}