import React from 'react';
import { useState, useContext } from 'react';
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
        <h2> {item.title} </h2>
        <p> {item.description} </p>
        <p>${item.price}</p>
        {
        add ?
        <div>Añadido!</div>
        :
        < ItemCount item={item} initial={1} addItem={addItem}  />
        
        }
        </div>
      
    </>
  )
}
export default ItemDetails