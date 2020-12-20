import React, { Component } from 'react'
import { connect } from 'react-redux'

import './sign-in.scss'
import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions'

class SignInComponent extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { emailSignInStart } = this.props
        const { email, password } = this.state
        emailSignInStart(email, password)
    }

    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }


    render() {
        const { googleSignInStart } = this.props
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your credentials</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} label="Email" onChange={this.handleOnChange} required />
                    <FormInput type="password" name="password" value={this.state.password} label="Password" onChange={this.handleOnChange} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignInComponent)
