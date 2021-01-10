import { put, call, takeEvery, all, select } from 'redux-saga/effects'

import { fetchCollectionFailure, fetchCollectionSuccess } from './shop-actions'
import { selectCartItems } from '../selectors'


export function* fetchCollectionsAsync() {
    try {
        const response = yield fetch('https://api.npoint.io/7e48940f3a0a0a6adb7d')
        const json = yield response.json()
        const normalisedData = yield json.collections.reduce((acc, collection) => {
            acc[collection.title.toLowerCase()] = collection;
            return acc
        }, {})
        yield put(fetchCollectionSuccess(normalisedData))
        const cartItems = yield select(selectCartItems)
        console.log('selectCartItems',cartItems)
        console.log('collections',json.collections)
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