import { createSelector } from 'reselect'

export const selectCart = state => state.cart
const selectUser = state => state.user
export const selectDirectory = state => state && state.directory && state.directory.overview ? state.directory.overview : []
export const selectShop = state => state.shop ? state.shop : {}

export const selectCollections = state => state.shop && state.shop.collections ? Object.values(state.shop.collections) : []
export const selectCollectionsObject = state => state.shop && state.shop.collections ? state.shop.collections : []

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCurrentUser = createSelector([selectUser], user => user.currentUser)
export const selectHiddenFlag = createSelector([selectCart], cart => cart.hidden)

export const selectCartCount = createSelector([selectCartItems],
    (cartItems) => cartItems.reduce((acm, item) => acm + item.quantity, 0))

export const selectCartTotal = createSelector([selectCartItems],
    (cartItems) => cartItems.reduce((acm, item) => acm + (item.quantity * item.price), 0))

export const selectCategoryItems = (collectionName) => createSelector([selectCollectionsObject], 
    (obj) => obj[collectionName] )

export const selectIsFetching = createSelector([selectShop],(shop) => shop.isFetching )

export const selectIsCollectionsLoaded = createSelector([selectShop],(shop) => !!shop.collections )

export const selectUserName = createSelector([selectCurrentUser], currentUser => !!currentUser ? currentUser.displayName : 'User')