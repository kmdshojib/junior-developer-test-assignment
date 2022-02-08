import React from 'react';

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <button>Go to checkout</button>
        </div>
     );
}
 
export default CartDropdown;