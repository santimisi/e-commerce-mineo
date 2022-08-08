import React from 'react';
<<<<<<< HEAD
import Item from './Item';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import ItemDetailContainer from './ItemDetailContainer';

function ItemDetails (idetail) {
  return (
    <div>
        <img src={idetail.image} width="200" />
        <p>Detalle del producto: {idetail.description} </p>
        <p>Precio del producto: {idetail.price}</p>
    </div>
=======
import { useEffect, useState, useContext } from 'react';
import ItemDetailContainer from './ItemDetailContainer';
=======
import { useState, useContext } from 'react';
>>>>>>> entregafirebase
import { Link, useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext} from './context/useContext';


function ItemDetails ({item}) {

  console.log("llega a detail",item);
  const [add, setAdd] = useState(false)

  const {addItem} = useContext(CartContext)

  const params = useParams() 
  const [detalles, setDetalles] = useState([])
  const onAdd = (numero) => {
    addItem(item, numero)
   }


  return (
    <>
        <div>          
        <img src={item.image} width="200" />
        <p> {item.description} </p>
        <p> Precio: {item.price}</p>
        {
        add ?
        <div>Añadido!</div>
        :
        < ItemCount item={item} initial={1} addItem={addItem}  />
        
        }
        <Link to="/cart"><button>Finalizar Compra</button></Link>
        </div>
      
    </>
>>>>>>> dudas
  )
}
export default ItemDetails