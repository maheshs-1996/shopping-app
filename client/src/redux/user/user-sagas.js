import { all, put, call, takeLatest } from 'redux-saga/effects'

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'

import { signInFailure, signInSuccess, signoutFailure, signoutSuccess } from './user-actions'
import { clearCartEvent } from '../cart/cart-actions'

function* getSnapShotfromUserAuth(userAuth, additionalData={}) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
        const userSnapshot = yield userRef.get()
        yield put(
            signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        )
    }
    catch (error) {
        yield put(signInFailure(error))
    }
}

export function* googleSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield getSnapShotfromUserAuth(user)
    }
    catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(
        'GOOGLE_SIGN_IN_START',
        googleSignIn
    )
}

export function* emailSignIn({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapShotfromUserAuth(user)
    }
    catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(
        'EMAIL_SIGN_IN_START',
        emailSignIn
    )
}

export function* isUserAuthorised() {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) return
        yield getSnapShotfromUserAuth(userAuth)
    }
    catch (error) {
        yield put(signInFailure(error))
    }
}

export function* checkUserSession() {
    yield takeLatest(
        'CHECK_USER_SESSION',
        isUserAuthorised
    )
}

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(clearCartEvent())
        yield put(signoutSuccess())
    }
    catch (error) {
        yield put(signoutFailure(error))
    }
}

export function* signoutStart() {
    yield takeLatest(
        'SIGN_OUT_START',
        signOut
    )
}

export function* signUp({payload : {displayName, email, password, confirmPassword}}) {
    try {
        if(password !== confirmPassword){
            alert('Passwords not matching')
        }
        else{
            const {user} = yield auth.createUserWithEmailAndPassword(email, password)
            yield getSnapShotfromUserAuth(user, {displayName})
        }
    }
    catch (error) {
        yield put(signoutFailure(error))
    }
}

export function* onSignUpStart() {
    yield takeLatest(
        'SIGN_UP_START',
        signUp
    )
}

export default function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(checkUserSession),
        call(signoutStart),
        call(onSignUpStart)
    ])
}