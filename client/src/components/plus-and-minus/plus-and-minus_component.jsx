import React from 'react'
import { connect } from 'react-redux'

import { decrementItem, addItem } from '../../redux/cart/cart-actions'
import { Quantity, Value, Icon } from './plus-and-minus_styles'

const PlusAndMinusComponent = (props) => {
    const { decrementItem, addItem, cartItem } = props
    const { quantity } = cartItem
    return (
        <Quantity>
            <Icon onClick={() => decrementItem(cartItem)}>&#10094;</Icon>
            <Value>{quantity}</Value>
            <Icon onClick={() => addItem(cartItem)}>&#10095;</Icon>
        </Quantity>
    )
}

const mapDispatchToProps = dispatch => ({
    decrementItem: cartItem => dispatch(decrementItem(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem))
})

export default connect(null, mapDispatchToProps)(PlusAndMinusComponent)
