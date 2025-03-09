import React from 'react'
import HeaderStyles from './Header.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  return (
    <div  className={HeaderStyles.HeaderWrapper}>
      <h1 onClick={()=>navigate("/")} className='cursor-pointer'>&lt;Dev<span style={{color:"#34D399"}}>Folio/&gt;</span></h1>
      <nav>
        <ul>
          <NavLink to="/">
          <li className='hover:text-[#34D399] hover:scale-95 transition-all duration-500'>Home</li>
          </NavLink>
          <NavLink to="/about">
          <li className='hover:text-[#34D399] hover:scale-95 transition-all duration-500 '>About</li>
          </NavLink>
          <NavLink to="/project">
          <li className='hover:text-[#34D399] hover:scale-95 transition-all duration-500 '>Projects</li>
          </NavLink>
          <NavLink to="/services">
          <li className='hover:text-[#34D399] hover:scale-95 transition-all duration-500 '>Services</li>
          </NavLink>
        </ul>
      </nav>

    </div>
  )
}

export default Header
