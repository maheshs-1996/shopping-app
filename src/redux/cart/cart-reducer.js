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

        case 'ADD_ITEM':{
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
        }

        case 'DECREMENT_ITEM':{
            let itemAlreadyExists = state.cartItems.find((item) => item.id === action.payload.id)
            if (itemAlreadyExists.quantity === 1) {
                return {
                    ...state,
                    cartItems: state.cartItems.filter(item => item.id !== itemAlreadyExists.id)
                }
            }
            let updatedCartItems = state.cartItems.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
            return {
                ...state,
                cartItems: updatedCartItems
            }
        }

        case 'DELETE_ITEM':
            console.log(state, action)
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            };

        default:
            return state;
    }
};

export default cartReducer;