import React, { Component } from 'react'
import './sign-in.scss'
import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'
import {auth,  signInWithGoogle } from '../../firebase/firebase.utils'

export default class SignInComponent extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {email, password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email,password )
            this.setState({
                email: '',
                password: ''
            })
        }
        catch(e){
            console.error(e)
        }
    }

    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your credentials</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} label="Email" onChange={this.handleOnChange} required />
                    <FormInput type="password" name="password" value={this.state.password} label="Password" onChange={this.handleOnChange} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
