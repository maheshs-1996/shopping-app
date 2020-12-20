import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/crown.svg'
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCurrentUser, selectHiddenFlag } from '../../redux/selectors'
import { signoutStart } from '../../redux/user/user-actions'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles'

const Header = ({ currentUser, hidden, signoutStart }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact-us'>CONTACT US</OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={signoutStart}>SIGN OUT</OptionLink>
                        :
                        <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHiddenFlag
})

const mapDispatchToProps = dispatch => ({
    signoutStart: () => dispatch(signoutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)