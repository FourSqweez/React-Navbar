import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'
import { Button } from '../Button'
function Navbar() {
  const [state, setState] = useState({ clicked: false })

  const handleClick = () => {
    setState({ clicked: state.clicked })
  }

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        React<i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
      <Button> Sign Up</Button>
    </nav>
  )
}

export default Navbar
