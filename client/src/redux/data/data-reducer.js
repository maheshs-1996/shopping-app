const directory = {
    isFetching : false,
    overview : []
}

export const directoryReducer = (state = directory, action) => {
    switch(action.type){
        case 'LOAD_HOMEPAGE_DATA_START':
            return {
                ...state,
                isFetching : true
            }
        case 'SET_HOMEPAGE_DATA':
            return {
                ...state,
                overview : action.payload,
                isFetching : false
            }
        default : 
        return state
    }
}