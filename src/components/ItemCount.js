import React from 'react'
import { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from 'react-router-dom';
function ItemCount ({item, stock, initial, addItem}) {

  const [qty, setQty] = useState (0);

  const añadirProducto = () => {
      setQty (qty + 1)}


  const eliminarProducto = () => {
    if (qty > 0) {
    setQty (qty - 1)}
    }

    initial = qty
    

  
    return (
<div>
        <Badge color="secondary" badgeContent={qty}>
          <ShoppingCartIcon />{" "}
        </Badge>
<ButtonGroup>
          <Button
            onClick={eliminarProducto}>
                          {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={añadirProducto}>
            {" "}
            <AddIcon fontSize="small" />
          </Button>
          <Button onClick= {() => addItem(item, qty)} variant="contained">Añadir al carrito</Button>
          <Link to="/cart"><Button variant="contained">Finalizar compra</Button></Link>
        </ButtonGroup>
        </div>
)}
  

export default ItemCount
