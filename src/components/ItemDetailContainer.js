import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import Item from './Item'
import ItemDetails from './ItemDetails'
import { Link, Route, Routes, useParams } from 'react-router-dom'



function ItemDetailContainer () {
    
    const [details, setDetails] = useState ([])
    const { itemId } = useParams();
    const [product, setProduct] = useState({});

    console.log(itemId)

const getItem = () => {
    fetch('https://fakestoreapi.com/products')
    .then((resp) => {return resp.json ()})
    .then((data) => { const ItemDescription = data.map ((detailData) =>  <ItemDetails description={detailData.description} image={detailData.image} price={detailData.price} id={detailData.id === itemId} />)
    useEffect(() => {
      const getItems = new Promise((resolve) => {
        setTimeout(() => {
          const myData = data.find((item) => item.id === itemId);
  
          resolve(myData);
        }, 1000);
      });
      getItems
      .then((res) => {
        setProduct(res);
      })
  }, [itemId]);
    setDetails (ItemDescription)})};

    



  return (
    <div className='ItemDetailContainer'>
      
      <button onClick={<Routes><Route path="/item/:productsId" element={< ItemDetails />} /></Routes>}>Detalles </button>
        < ItemDetails {...product}/>
    </div>
  )
}

export default ItemDetailContainer

