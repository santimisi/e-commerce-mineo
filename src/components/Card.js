import React from 'react'
import './Card.css'
import 'D:/programas coderhouse/react js tareas/ecommerce-mineo/node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'

function Cards (props) {
  return (
<div className="height d-flex justify-content-center align-items-center">
    
    <div className="card p-3">
        
        <div className="d-flex justify-content-between align-items-center ">
            <div className="mt-2">
                <h4 className="text-uppercase">{props.product}</h4>
                <div className="mt-5">
                    <h5 className="text-uppercase mb-0">{props.id}</h5>
                    <h1 className="main-heading mt-0">{props.price}</h1>
                </div>
            </div>
            <div className="image">
                <img src="{props.img}" width="200"/>
            </div>
        </div>

        
        
        <p>{props.description}</p>
        <p>Stock disponible: {props.stock}</p>
        
        <button className="btn btn-danger">Add to cart</button>
    </div>
    
</div>
  )
}

export default Cards;