import React, { Component } from 'react';

import Homepage from './pages/homepage/homepage-component'
import ShopPage from './pages/shop/shop-component'
import CheckoutPage from './pages/checkout/checkout-component'


import Header from './components/header/header'
import LoginComponent from './pages/login/login-component'
import { Route, Switch , Redirect} from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import {setCurrentUser} from './redux/user/user-actions'
import {selectCurrentUser} from './redux/selectors'
import {connect} from 'react-redux'

import './App.css';
class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser : {
              id : snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      else{
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => (
            this.props.currentUser ? <Redirect to='/' /> : <LoginComponent/>
          )} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser : selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
