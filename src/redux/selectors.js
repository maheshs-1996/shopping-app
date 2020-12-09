import { createSelector } from 'reselect'

export const selectCart = state => state.cart
const selectUser = state => state.user

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCurrentUser = createSelector([selectUser], user => user.currentUser)
export const selectHiddenFlag = createSelector([selectCart], cart => cart.hidden)

export const selectCartCount = createSelector([selectCartItems],
    (cartItems) => cartItems.reduce((acm, item) => acm + item.quantity, 0))

export const selectCartTotal = createSelector([selectCartItems],
    (cartItems) => cartItems.reduce((acm, item) => acm + (item.quantity * item.price), 0))