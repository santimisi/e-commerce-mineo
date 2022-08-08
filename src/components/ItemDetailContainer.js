import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetails from './ItemDetails'
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Link, Route, Routes, useParams } from 'react-router-dom'
>>>>>>> dudas
=======
import { useParams } from 'react-router-dom'
import { getOneItem } from './services/firestore';

>>>>>>> entregafirebase



function ItemDetailContainer () {
  const [product, setProduct] = useState({});
<<<<<<< HEAD
<<<<<<< HEAD
    const [details, setDetails] = useState ([])
<<<<<<< HEAD
<<<<<<< HEAD
=======
    const { itemId } = useParams();
    const [product, setProduct] = useState({});

    console.log(itemId)
>>>>>>> dudas

const getItem = () => {
    fetch('https://fakestoreapi.com/products')
    .then((resp) => {return resp.json ()})
<<<<<<< HEAD
    .then((data) => { const ItemDescription = data.map ((detailData) =>  <ItemDetails description={detailData.description} image={detailData.image} price={detailData.price} />

        
    )
    setDetails (ItemDescription)})}


  return (
    <div>
        <button onClick={getItem}>Detalles</button>
        <ItemDetails description={details}/>
    </div>
  );
}

export default ItemDetailContainer
=======
    .then((data) => { const ItemDescription = data.map ((detailData) =>  <ItemDetails description={detailData.description} image={detailData.image} price={detailData.price} id={detailData.id === itemId} />)
    useEffect(() => {
      const getItems = new Promise((resolve) => {
        setTimeout(() => {
          const myData = data.find((item) => item.id === itemId);
=======
    const { productsId } = useParams();
=======
  const [details, setDetails] = useState ([])
=======
>>>>>>> trabajomejorado
  const { productsId } = useParams();
>>>>>>> entregafirebase


  console.log(productsId)

<<<<<<< HEAD
const getItem = () => {
>>>>>>> entregaduda
  
    fetch(`https://fakestoreapi.com/products/${productsId}`)
    .then((resp) => resp.json())
=======
  const getItem = () => {
    
    getOneItem(productsId)
>>>>>>> entregafirebase
    .then((data) =>setProduct(data) )

  }

  useEffect(() => {
    getItem(product);
  }, [productsId]);

    console.log("producto seteados",product);

  
  return (
    <div className='ItemDetailContainer'>
      
     {/*  <button onClick={<Routes><Route path="/item/:productsId" element={< ItemDetails />} /></Routes>}>Detalles </button> */}
        < ItemDetails item={product}/>
    </div>
  )
}

<<<<<<< HEAD
export default ItemDetailContainer

>>>>>>> dudas
=======
export default ItemDetailContainer
>>>>>>> entregaduda
