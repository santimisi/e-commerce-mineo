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
        return (
        <div>
                <img src ="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg" width={30} alt="CartWidget"/>
                <div className="itemsInCart">
                    <h1> {totalCantidad}</h1>
            </div>
        </div>
        )
}
export default CartWidget;