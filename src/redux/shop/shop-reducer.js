const data = []

const shopReducer = (state = data, action) => {
    switch(action.type){
        case 'UPDATE_SHOP_DATA' : {
            return {
                ...state,
                ...action.payload
            }
        }
        default : return state
    }
}

export default shopReducer