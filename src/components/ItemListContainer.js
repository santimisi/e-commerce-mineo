import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function ItemListContainer () {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState ([])
  const { catId } = useParams();
  




  useEffect (() => {
      setTimeout (() => {
      fetch('https://fakestoreapi.com/products')
      .then((resp) => resp.json ())
      .then((data) => !catId ? setInfo(data) :setInfo(data.filter((item) => item.category === catId) ))
    
      .finally(() => setLoading(false));


    }, 1000);
  }, [catId])

<<<<<<< HEAD
<<<<<<< HEAD
  return (

    <div>
          <p>Bienvenido, aca va a aparecer el catálogo <ItemList /></p>
          {info && info.map(i => <Item product={i.title} id={i.id} />)}
=======
console.log(catId)
=======

console.log(info)

>>>>>>> entregaduda

  return loading ? (
    <h2>CARGANDO...</h2>
  ) : (
    <div>


          < ItemList item={info} />

>>>>>>> dudas


    </div>
    
  )
}

<<<<<<< HEAD
=======

>>>>>>> entregaduda
export default ItemListContainer