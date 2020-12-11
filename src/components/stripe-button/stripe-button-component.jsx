import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) =>  {
    const priceForStripe = price * 100;
    const key = 'pk_test_51Hx6k3B4PueS7v9kEeErXss1B5R3mZCu1mnGWr7kxdHPTaY7GJw1qrrgzVVZ2EKPSdsxAMOItLqRekkE8ifHBxr100lWI5v2H1'

    const onToken = (token) => {
        console.log(token)
        alert('payment successful')
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
            token={onToken}
        />
    )
}

export default StripeCheckoutButton