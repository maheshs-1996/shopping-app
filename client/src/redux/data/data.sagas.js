import { all, call, takeEvery, put } from 'redux-saga/effects'
import { setHomepageData } from './data-actions'

export function* loadHomepageData() {
    try {
        const response = yield fetch("https://api.npoint.io/fb0565833a2b6ae1a74f")
        const json = yield response.json()
        yield put(setHomepageData(json.overview))
    }
    catch (error) {
        console.error(error)
    }
}

export function* loadHomepageDataStart() {
    yield takeEvery('LOAD_HOMEPAGE_DATA_START', loadHomepageData)
}

export default function* directorySaga() {
    yield all([
        call(loadHomepageDataStart)
    ])
}