import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllItems } from './services/firestore';
function ItemListContainer () {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState ([])
  const { catId } = useParams();


  useEffect (() => {
      setTimeout (() => {
      getAllItems()
      .then((data) => !catId ? setInfo(data) :setInfo(data.filter((item) => item.category === catId) ))
    
      .finally(() => setLoading(false));


    }, 1000);
  }, [catId])


console.log(info)


  return loading ? (
    <h2>CARGANDO...</h2>
  ) : (
    <div>
          < ItemList item={info} />
    </div>
    
  )
}


export default ItemListContainer