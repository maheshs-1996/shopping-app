export const fetchCollectionStart = () => ({
    type : 'FETCH_COLLECTION_START'
})


export const fetchCollectionSuccess = (payload) => ({
    type : 'FETCH_COLLECTION_SUCCESS',
    payload
})

export const fetchCollectionFailure = (errorMsg) => ({
    type : 'FETCH_COLLECTION_FAILURE',
    payload : errorMsg
})