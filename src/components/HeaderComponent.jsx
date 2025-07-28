import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>

          <header>
               <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                     <a className="navbar-brand" href="https://www.google.com">Employee Management System</a>
                       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                        <ul className="navbar-nav">
                          <li className="nav-item"></li>
                          <NavLink className='nav-link' to='/employees'>Employees</NavLink>
                          <NavLink className='nav-link' to='/departments'>Departments</NavLink>
                        </ul>
                       
                      </div>
                      </div>
                     
               </nav>
          </header>

    </div>
  )
}

export default HeaderComponent