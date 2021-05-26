import React from 'react'

import logo from 'assets/commuter-calculator-logo-green.png'

import './header.styles.scss'

const Header = () => (
  <div className="logo-container">
    <img className="logo" alt="logo" src={logo} />
  </div>
)

export default Header
