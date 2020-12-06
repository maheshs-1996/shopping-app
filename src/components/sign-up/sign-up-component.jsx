import React, { Component } from 'react'
import './sign-up.scss'
import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

export default class SignInComponent extends Component {
    constructor() {
        super()
        this.state = {
            displayName:'',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {displayName,email,password ,confirmPassword } = this.state

        if(password !== confirmPassword){
            alert('Passwords not matching')
        }
        else{
            try {
                const {user} = await auth.createUserWithEmailAndPassword(email, password)

                createUserProfileDocument(user, {displayName})
                this.setState({
                    displayName:'',
                    email: '',
                    password: '',
                    confirmPassword:''
                })
            }
            catch(e){
                console.error(e)
            }
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
