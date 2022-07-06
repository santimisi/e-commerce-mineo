import React from 'react';
import Item from './Item';
import { useEffect, useState } from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import { useParams } from 'react-router-dom';

function ItemDetails () {

  const params = useParams() 
  const [detalles, setDetalles] = useState([])
  

  const fetchDetail = () => {
  fetch(`https://api.escuelajs.co/api/v1/products/${params.productsId}`)
  .then ((response) => response.json())
  .then ((data) => {setDetalles (data)})
  }

  useEffect(() => {
    fetchDetail()
  }, [])


  return (
    <>
        <div>
        <img src={detalles.images} width="200" />
        <p>Detalle del producto: {detalles.description} </p>
        <p>Precio del producto: {detalles.price}</p>
        </div>
      
    </>
  )
}
export default ItemDetails