import React from 'react';

import CustomButton from '../custom-button/custom-button';
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item'

import './cart-dropdown.scss';

const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
    {
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
    }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
    cartItems : state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);