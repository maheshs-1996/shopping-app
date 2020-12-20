export const googleSignInStart = () => ({
    type: 'GOOGLE_SIGN_IN_START'
})

export const signInSuccess = (user) => ({
    type: 'SIGN_IN_SUCCESS',
    payload: user
})

export const signInFailure = (error) => ({
    type: 'SIGN_IN_FAILURE',
    payload: error
})

export const emailSignInStart = (payload) => ({
    type: 'EMAIL_SIGN_IN_START',
    payload
})

export const checkUserSession = () => ({
    type: 'CHECK_USER_SESSION'
})

export const signoutStart = () => ({
    type : 'SIGN_OUT_START'
})

export const signoutSuccess = () => ({
    type : 'SIGN_OUT_SUCCESS'
})

export const signoutFailure = (error) => ({
    type : 'SIGN_OUT_FAILURE',
    payload : error
})

export const signUpStart = (user) => ({
    type : 'SIGN_UP_START',
    payload : user
})