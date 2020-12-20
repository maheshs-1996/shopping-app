const initialState = {
    currentUser: null,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
        case 'SIGN_IN_SUCCESS':
            return {
                ...state,
                currentUser : action.payload,
                error: null
            }

        case 'SIGN_OUT_SUCCESS': 
            return {
                ...state,
                currentUser: null,
                error: null
            }

        case 'SIGN_IN_FAILURE':
        case 'SIGN_OUT_FAILURE':
            return {
                ...state,
                error : action.payload
            }

        default:
            return state;
    }
}

export default userReducer