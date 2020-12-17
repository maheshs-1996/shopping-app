import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
    type : 'FETCH_COLLECTION_START'
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        dispatch(fetchCollectionStart())

        const collectionRef = firestore.collection('collections')
        collectionRef.get().then(async snapshot => {
            let collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionSuccess(collectionsMap))
        })
        .catch((err) => {
            dispatch(fetchCollectionFailure(err.message))
        })
    }
}

export const fetchCollectionSuccess = (payload) => ({
    type : 'FETCH_COLLECTION_SUCCESS',
    payload
})

export const fetchCollectionFailure = (errorMsg) => ({
    type : 'FETCH_COLLECTION_FAILURE',
    payload : errorMsg
})