import React, { useState } from 'react'
import './sign-up.scss'
import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'

import { signUpStart } from '../../redux/user/user-actions'
import { connect } from 'react-redux'

const SignInComponent = ({ signUpStart }) => {
    const [userCreds, setUserCreds] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { displayName, email, password, confirmPassword } = userCreds

    const handleSubmit = async (e) => {
        e.preventDefault()
        signUpStart({ displayName, email, password, confirmPassword })
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserCreds({
            ...userCreds,
            [name]: value
        })
    }

    return (
        <div className="sign-up">
            <h2>I do not have an account</h2>
            <span>Sign in with your credentials</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" value={displayName} label="Display Name" onChange={handleOnChange} required />
                <FormInput type="email" name="email" value={email} label="Email" onChange={handleOnChange} required />
                <FormInput type="password" name="password" value={password} label="Password" onChange={handleOnChange} required />
                <FormInput type="password" name="confirmPassword" value={confirmPassword} label="Confirm Password" onChange={handleOnChange} required />

                <div className="buttons">
                    <CustomButton type="submit">Sign Up</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (user) => dispatch(signUpStart(user))
})

export default connect(null, mapDispatchToProps)(SignInComponent) 
