import React from 'react';
import Item from './Item';
import { useEffect, useState } from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import { Link, useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

function ItemDetails () {
  const [add, setAdd] = useState(false)
  const onAdd = (qty) => {setAdd (!add)}

  const params = useParams() 
  const [detalles, setDetalles] = useState([])

  

  const fetchDetail = () => {
  fetch(`https://fakestoreapi.com/products/${params.productsId}`)
  .then ((response) => response.json())
  .then ((data) => {setDetalles (data)})
  .then ((data) => {console.log (data)})
  }

  useEffect(() => {
    fetchDetail()
  }, [])


  return (
    <>
        <div>          
        <img src={detalles.image} width="200" />
        <p> {detalles.description} </p>
        <p> Precio: {detalles.price}</p>
        {
        add ?
        <div>Añadido!</div>
        :
        < ItemCount onAdd={onAdd}  />
        }
        <Link to="/cart"><button>Finalizar Compra</button></Link>
        </div>
      
    </>
  )
}
export default ItemDetails