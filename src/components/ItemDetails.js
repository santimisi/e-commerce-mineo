import React from 'react';
import Item from './Item';
import { useEffect, useState, useContext } from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import { Link, useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext, CartProvider } from './context/useContext';


function ItemDetails ({item}) {
  const [add, setAdd] = useState(false)

  const {addItem} = useContext(CartContext)

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
        < ItemCount item={item} initial={1} addItem={addItem}  />
        
        }
        <Link to="/cart"><button>Finalizar Compra</button></Link>
        </div>
      
    </>
  )
}
export default ItemDetails