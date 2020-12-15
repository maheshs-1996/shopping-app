import { createSelector } from 'reselect'

export const selectCart = state => state.cart
const selectUser = state => state.user
export const selectDirectory = state => state.directory
export const selectShop = state => state.shop

export const selectCollections = state => state.shop ? Object.values(state.shop) : []

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCurrentUser = createSelector([selectUser], user => user.currentUser)
export const selectHiddenFlag = createSelector([selectCart], cart => cart.hidden)

export const selectCartCount = createSelector([selectCartItems],
    (cartItems) => cartItems.reduce((acm, item) => acm + item.quantity, 0))

export const selectCartTotal = createSelector([selectCartItems],
    (cartItems) => cartItems.reduce((acm, item) => acm + (item.quantity * item.price), 0))

export const selectCategoryItems = (collectionName) => createSelector([selectShop], 
    (cat_items) => cat_items[collectionName] )