import React, { Component } from 'react'
import './sign-up.scss'
import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'

import {signUpStart } from '../../redux/user/user-actions'
import { connect } from 'react-redux'

class SignInComponent extends Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state
        const { signUpStart } = this.props
        signUpStart({displayName, email, password, confirmPassword})


    }

    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign in with your credentials</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={this.state.displayName} label="Display Name" onChange={this.handleOnChange} required />
                    <FormInput type="email" name="email" value={this.state.email} label="Email" onChange={this.handleOnChange} required />
                    <FormInput type="password" name="password" value={this.state.password} label="Password" onChange={this.handleOnChange} required />
                    <FormInput type="password" name="confirmPassword" value={this.state.confirmPassword} label="Confirm Password" onChange={this.handleOnChange} required />

                    <div className="buttons">
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (user) => dispatch(signUpStart(user))
})

export default connect(null, mapDispatchToProps)(SignInComponent) 
