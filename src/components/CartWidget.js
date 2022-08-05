import React, { useContext} from 'react';
import { CartContext} from './context/useContext';

const CartWidget = () => {

        const { totalCantidad , items } = useContext(CartContext)
        console.log("veo cart en widwet",items);
        let itemsInCart = 0;
        items && items.map((item) => {
                itemsInCart = itemsInCart + item.qty
        })
        console.log("total",totalCantidad);
        const checkCantidad = itemsInCart == 0 ? "none" : "block"
        return (

                        <p style={{display: checkCantidad , fontSize:"12px"}}> {itemsInCart}</p>


        )
}
export default CartWidget;