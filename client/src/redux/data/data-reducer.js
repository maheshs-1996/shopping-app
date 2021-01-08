const HOMEPAGE_DATA = []

export const directoryReducer = (state = HOMEPAGE_DATA, action) => {
    switch(action.type){
        case 'SET_HOMEPAGE_DATA':
            return {
                ...state,
                overview : action.payload
            }
        default : 
        return state
    }
}