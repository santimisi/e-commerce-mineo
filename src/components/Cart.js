import React, {useContext} from 'react';
import { CartContext } from './context/useContext'

const Cart = () => {
    const { items, removeItem, clearItems} = useContext(CartContext)
    
    return (
        <div>
            {
                items.map((item) =>(
                    <div key={item.id}>
                        <h1>{item.qty}, {item.title}</h1>
                        <h2>${item.price * item.qty}</h2>
                        <h6><button onClick={() => removeItem(item.id)}>Borrar producto</button></h6>
                    </div>
                ) )
            }
            <h6><button onClick={() => clearItems()}>Vaciar Carrito</button></h6>
        </div>
    )
}

export default Cart;