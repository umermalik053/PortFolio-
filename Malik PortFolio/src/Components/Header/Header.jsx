import React from 'react'
import HeaderStyles from './Header.module.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className={HeaderStyles.HeaderWrapper}>
      <h1>&lt;Dev<span style={{color:"#34D399"}}>Folio/&gt;</span></h1>
      <nav>
        <ul>
          <NavLink to="/">
          <li className='hover:text-[#34D399] hover:animate-bounce'>Home</li>
          </NavLink>
          <NavLink to="/about">
          <li>About</li>
          </NavLink>
          <NavLink to="/Projects">
          <li>Projects</li>
          </NavLink>
          <NavLink to="/contact">
          <li>Contact</li>
          </NavLink>
        </ul>
      </nav>

    </div>
  )
}

export default Header
