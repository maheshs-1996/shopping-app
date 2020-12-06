import React from 'react'
import SignInComponent from '../../components/sign-in/sign-in-component'
import SignUpComponent from '../../components/sign-up/sign-up-component'

import './login.scss'

const LoginComponent = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignInComponent/>
            <SignUpComponent/>
        </div>
    )
}

export default LoginComponent
