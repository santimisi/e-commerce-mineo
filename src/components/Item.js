import React from 'react'
import { useEffect, useState } from 'react'
import Cards from './Card'

export const Item = () => {

    const [info, setInfo] = useState ([])

    useEffect (() => {
        setTimeout (() => {
        fetch('data.json')
        .then((resp) => resp.json ())
        .then((data) => setInfo(data))
    }, 2000, [])})
  
    return (
      <div>{info && info.map(i => <Cards product={i.name} price={i.price} />)}</div>
    )
  }

export default Item;
