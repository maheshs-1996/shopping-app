import React from 'react';
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/selectors'
import { toggleCartHidden } from '../../redux/cart/cart-actions'

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown' onFocus={() => dispatch(toggleCartHidden())}>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map((item) => <CartItem key={item.id} item={item} />)
                    :
                    <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        {
            cartItems.length ? 
            <CustomButton onClick={() => { 
                history.push('/checkout') 
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton> 
            : 
            null
        }
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));