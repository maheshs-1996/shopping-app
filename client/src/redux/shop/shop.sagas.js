import { put, call, takeEvery, all} from 'redux-saga/effects'

import { fetchCollectionFailure, fetchCollectionSuccess } from './shop-actions'


export function* fetchCollectionsAsync() {
    try {
        const response = yield fetch('https://api.npoint.io/7e48940f3a0a0a6adb7d')
        const json = yield response.json()
        const normalisedData =  json.collections.reduce((acc, collection) => {
            acc[collection.title.toLowerCase()] = collection;
            return acc
        },{})
        yield put(fetchCollectionSuccess(normalisedData))
    }
    catch (err) {
        yield put(fetchCollectionFailure(err.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery('FETCH_COLLECTION_START', fetchCollectionsAsync);
}

export default function* shopSaga() {
    yield all([
        call(fetchCollectionsStart)
    ])
}