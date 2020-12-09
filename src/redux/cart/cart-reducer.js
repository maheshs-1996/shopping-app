const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden
            };
        case 'ADD_ITEM':
            let itemAlreadyExists = state.cartItems.find((item) => item.id === action.payload.id)
            if (itemAlreadyExists) {
                let updatedCartItems = state.cartItems.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                return {
                    ...state,
                    cartItems: updatedCartItems
                }
            }
            return {
                ...state,
                cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
            };
        default:
            return state;
    }
};

export default cartReducer;