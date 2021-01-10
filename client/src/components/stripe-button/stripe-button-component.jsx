import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios'

import {clearCartEvent} from '../../redux/cart/cart-actions'

const StripeCheckoutButton = ({ price, history,clearCart }) =>  {
    const priceForStripe = price * 100;
    const key = 'pk_test_51Hx6k3B4PueS7v9kEeErXss1B5R3mZCu1mnGWr7kxdHPTaY7GJw1qrrgzVVZ2EKPSdsxAMOItLqRekkE8ifHBxr100lWI5v2H1'

    const onSuccess = (token) => {
        axios({
            url : 'payment',
            method : 'post',
            data : {
                amount : priceForStripe,
                token
            }
        }).then((response) => {
            clearCart()
            history.push('/success')
        })
        .catch((error) => {
            console.log('error',error)
            alert('Something went wrong')
        })
    }

    return (
        <StripeCheckout 
            amount={priceForStripe}
            stripeKey={key}
            label='Pay Now'
            name='Fashion Mart Ltd'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            panelLabel='Pay Now'
            token={onSuccess}
        />
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearCart : () => dispatch(clearCartEvent())
})

export default withRouter(connect(null,mapDispatchToProps)(StripeCheckoutButton))