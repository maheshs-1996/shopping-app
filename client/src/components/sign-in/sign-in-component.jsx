import React, { useState } from 'react'
import { connect } from 'react-redux'

import './sign-in.scss'
import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions'

const SignInComponent = ({ emailSignInStart, googleSignInStart }) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const { email, password } = user

    const handleSubmit = async (e) => {
        e.preventDefault()
        emailSignInStart(email, password)
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your credentials</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email" value={email} label="Email" onChange={handleOnChange} required />
                <FormInput type="password" name="password" value={password} label="Password" onChange={handleOnChange} required />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignInComponent)
