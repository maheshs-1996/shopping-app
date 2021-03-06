import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item'
import { selectCartItems, selectCartCount } from '../../redux/selectors'
import { toggleCartHidden, clearCartAsync } from '../../redux/cart/cart-actions'

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch, cartCount }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                )}
        </CartItemsContainer>
        {
            cartCount > 0 ? (
                <>
                    <CartDropdownButton
                        onClick={() => {
                            history.push('/checkout');
                            dispatch(toggleCartHidden());
                        }}
                    >
                        GO TO CHECKOUT
                    </CartDropdownButton>

                    <CartDropdownButton inverted onClick={() => {
                        dispatch(clearCartAsync())
                    }}>CLEAR CART
                    </CartDropdownButton>
                </>
            ) : null
        }
    </CartDropdownContainer>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    cartCount: selectCartCount(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));