import { takeEvery, put, all, call } from 'redux-saga/effects'
import { clearCartEvent, toggleCartHidden } from './cart-actions'

export function* clearCartAsync() {
    yield put(toggleCartHidden())
    yield put(clearCartEvent())
}

export function* clearCart() {
    yield takeEvery('CLEAR_CART_INITIATE', clearCartAsync)
}

export default function* cartSaga() {
    yield all([
        call(clearCart)
    ])
}