import { all, fork } from "redux-saga/effects";

import { fetchCollectionsStart } from '../redux/shop/shop.sagas'
import { clearCart } from '../redux/cart/cart-sagas'

export default function* () {
    yield all([
        fork(fetchCollectionsStart),
        fork(clearCart)
    ]);
}