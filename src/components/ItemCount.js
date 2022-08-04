import React from 'react'
import { useState } from "react";

function ItemCount ({item, stock, initial, addItem}) {

  const [qty, setQty] = useState (0);

  const añadirProducto = () => {
      setQty (qty + 1)}


  const eliminarProducto = () => {
    if (qty > 0) {
    setQty (qty - 1)}
    }

    initial = qty
    

  
    return (
    <>
    <p>{initial}</p>
    <button onClick={añadirProducto }>añadir un producto</button>
    <button onClick={eliminarProducto}>eliminar un producto</button>
    <button onClick= {() => addItem(item, qty)}>Añadir al carrito</button>
    </>
  )
}

export default ItemCount