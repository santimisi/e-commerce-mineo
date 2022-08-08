import React from 'react'

import Item from './Item'


function ItemList(itemprops){
  return(
    <div className='item-list' style={{display: "flex", flexWrap: "wrap"}}>
      {itemprops.item.map ((item)=>(
    < Item
            name={item.title}
            image={item.image}
            price={item.price}
            id={item.id}
          />
      ))}
      </div>
  )
}

export default ItemList;