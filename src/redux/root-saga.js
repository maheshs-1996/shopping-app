import { all, call } from "redux-saga/effects";

import shopSaga from './shop/shop.sagas'
import cartSaga from './cart/cart-sagas'
import userSaga from './user/user-sagas'

export default function* () {
    yield all([
        call(shopSaga),
        call(cartSaga),
        call(userSaga)
    ]);
}