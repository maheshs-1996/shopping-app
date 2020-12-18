import { takeEvery, put, call } from 'redux-saga/effects'

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shop-actions'

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionSuccess(collectionMap))
    }
    catch (err) {
        yield put(fetchCollectionFailure(err.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery('FETCH_COLLECTION_START',fetchCollectionsAsync);
}