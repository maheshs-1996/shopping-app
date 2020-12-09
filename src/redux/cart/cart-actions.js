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