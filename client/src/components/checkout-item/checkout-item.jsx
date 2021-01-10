import React from 'react';
import { connect } from 'react-redux'

import PlusAndMinusComponent from '../plus-and-minus/plus-and-minus_component'
import { deleteItem } from '../../redux/cart/cart-actions'

import './checkout-item.scss';

const CheckoutItem = (props) => {
    const { cartItem, deleteItem } = props
    const { name, imageUrl, price } = cartItem
    return (<div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <PlusAndMinusComponent {...props} />
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => deleteItem(cartItem)}>&#10005;</div>
    </div>)
};

const mapDispatchToProps = dispatch => ({
    deleteItem: cartItem => dispatch(deleteItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);