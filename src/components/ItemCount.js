import React from 'react'
import { useState } from "react";



function ItemCount ({stock, initial, onAdd}) {

    let [inicial, setNum] = useState (0);

    const añadirProducto = () => {
        if (inicial < stock) {
        setNum (inicial + 1)}
    }

    stock = 5
    initial = inicial
    onAdd = initial

  
    return (
    <>
    <p>{initial}</p>
    <button onClick={añadirProducto}>añadir un producto</button>
    </>
  )
}

export default ItemCount;