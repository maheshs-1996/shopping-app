import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/images/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import './header.scss'

const Header = ({ currentUser }) => {
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
            </div>
        </div>
    )
}

export default Header