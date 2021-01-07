import { put, call, takeEvery, all, delay} from 'redux-saga/effects'

import { fetchCollectionFailure, fetchCollectionSuccess } from './shop-actions'

import SHOP_DATA from '../../data/shop_data'

export function* fetchCollectionsAsync() {
    try {
        yield delay(2000);
        let normalisedData =  SHOP_DATA.reduce((acc, collection) => {
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