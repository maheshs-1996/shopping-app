import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/images/crown.svg'
import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className="option">SHOP</Link>
                <Link to='/contact-us' className="option">CONTACT US</Link>
            </div>
        </div>
    )
}

export default Header