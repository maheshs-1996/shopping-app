import React, { Component } from 'react';

import Homepage from './pages/homepage/homepage-component'
import ShopPage from './pages/shop/shop-component'
import CheckoutPage from './pages/checkout/checkout-component'
import StaticTemplate from './components/static-template/static-component'


import Header from './components/header/header'
import LoginComponent from './pages/login/login-component'
import { Route, Switch, Redirect } from 'react-router-dom'
import { checkUserSession } from './redux/user/user-actions'
import { selectCurrentUser, selectCartCount } from './redux/selectors'
import { connect } from 'react-redux'

import './App.css';
class App extends Component {

  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => (
            this.props.currentUser ? <Redirect to='/' /> : <LoginComponent />
          )} />
          <Route exact path='/checkout' render={() => (
            this.props.count ? <CheckoutPage /> : <Redirect to='/' />
          )} />
          <Route path='/contact-us' render={props => (
            <StaticTemplate {...props} mainText="Thanks for stopping by. This is a dummy site" subText="Feel free to play around. Have a good day" />
          )} />
          <Route path='/success' render={props => (
            <StaticTemplate {...props} mainText="Order placed successfully." subText="This is a dummy site.Thanks for using Fashion Mart" />
          )} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  count: selectCartCount(state)
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
