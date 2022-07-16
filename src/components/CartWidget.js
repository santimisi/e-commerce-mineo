import React, { useContext} from 'react';
import { CartContext } from './context/useContext';

const CartWidget = () => {
        const { items } = useContext(CartContext)
        let itemsInCart = 0;



        return (
        <div>
            <div className="itemsInCart">
                
            </div>
                <img src ="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg" width={30} alt="CartWidget"/>
        </div>
        )
}

export default CartWidget;