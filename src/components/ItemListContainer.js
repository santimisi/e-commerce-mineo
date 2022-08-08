import React from 'react'
import ItemList from './ItemList'
import Item from './Item.js';
import { useState, useEffect } from 'react';
import { CategoryNavbar } from './CategoryNavbar';
import { useParams } from 'react-router-dom';

function ItemListContainer () {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState ([])
  const { catId } = useParams();
  



  useEffect (() => {
      setTimeout (() => {
      fetch('https://fakestoreapi.com/products')
      .then((resp) => resp.json ())
      .then((data) => setInfo(data))
      setLoading(true);
      const getItems = new Promise((resolve) => {
        setTimeout(() => {
          const myData = catId
            ? info.filter((item) => item.category === catId)
            : info;
  
          resolve(myData);
        }, 1000);
      });
  
      getItems
        .then((res) => {
          setInfo(res);
        })
        .finally(() => setLoading(false));
    }, );
  }, [catId])

<<<<<<< HEAD
  return (

    <div>
          <p>Bienvenido, aca va a aparecer el catálogo <ItemList /></p>
          {info && info.map(i => <Item product={i.title} id={i.id} />)}
=======
console.log(catId)

  return loading ? (
    <h2>CARGANDO...</h2>
  ) : (
    <div>

          < ItemList item={info} />

>>>>>>> dudas

    </div>
    
  )
}

export default ItemListContainer