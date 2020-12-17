export const toggleCartHidden = () => ({
    type: 'TOGGLE_CART_HIDDEN'
})

export const addItem = item => ({
    type: 'ADD_ITEM',
    payload: item
});

export const deleteItem = item => ({
    type: 'DELETE_ITEM',
    payload: item
});

export const decrementItem = item => ({
    type: 'DECREMENT_ITEM',
    payload: item
});

export const clearCartEvent = () => ({
    type: 'CLEAR_CART'
})

export const clearCart = () => {
    return dispatch  => {
        dispatch(toggleCartHidden())
        dispatch(clearCartEvent())
    }
}