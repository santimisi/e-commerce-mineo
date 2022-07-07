import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import ItemDetails from './ItemDetails';


function ItemCount ({stock, initial, onAdd}) {

    const [inicial, setNum] = useState (0);



    const añadirProducto = () => {
        if (inicial < stock) {
        setNum (inicial + 1)}

    }

    const eliminarProducto = () => {
      if (inicial > 0) {
      setNum (inicial - 1)}
  }



    stock = 5
    initial = inicial
    

  
    return (
    <>
    <p>{initial}</p>
    <button onClick={añadirProducto }>añadir un producto</button>
    <button onClick={eliminarProducto}>eliminar un producto</button>
    <button onClick= {() => onAdd()}>Añadir al carrito</button>
    </>
  )
}

export default ItemCount;