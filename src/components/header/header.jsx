import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/images/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCurrentUser, selectHiddenFlag } from '../../redux/selectors'
import { createStructuredSelector} from 'reselect'
import { connect } from 'react-redux'
import './header.scss'

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className="option">SHOP</Link>
                <Link to='/contact-us' className="option">CONTACT US</Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link to='/signin' className="option">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHiddenFlag
})

export default connect(mapStateToProps)(Header)