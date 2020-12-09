import React from 'react';

import { connect } from 'react-redux'
import { deleteItem , decrementItem , addItem} from '../../redux/cart/cart-actions'

import './checkout-item.scss';

const CheckoutItem = ({ cartItem, deleteItem , decrementItem , addItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (<div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <div className='quantity'>
            <div className="icon" onClick={() => decrementItem(cartItem)}>&#10094;</div>
            <div className="value">{quantity}</div>
            <div className="icon" onClick={() => addItem(cartItem)}>&#10095;</div>
        </div>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => deleteItem(cartItem)}>&#10005;</div>
    </div>)
};

const mapDispatchToProps = dispatch => ({
    deleteItem: cartItem => dispatch(deleteItem(cartItem)),
    decrementItem: cartItem => dispatch(decrementItem(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);