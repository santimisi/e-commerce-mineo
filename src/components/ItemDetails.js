import React from 'react';
import Item from './Item';
import { useEffect, useState } from 'react';
import ItemDetailContainer from './ItemDetailContainer';

function ItemDetails (idetail) {
  return (
    <div>
        <img src={idetail.image} width="200" />
        <p>Detalle del producto: {idetail.description} </p>
        <p>Precio del producto: {idetail.price}</p>
    </div>
  )
}
export default ItemDetails