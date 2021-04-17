import React from 'react'

import './header.styles.scss'
import logo from '../../assets/commuter-calculator-logo.png'

const Header = () => (
    <div className='logo-container'>
        <img className='logo' alt='logo' src={logo} />
    </div>
)

export default Header