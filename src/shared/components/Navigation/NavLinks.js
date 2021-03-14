import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom'

import {AuthContext} from '../../context/auth-context'
import './NavLinks.css'


const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className='nav-links'>
      {auth.isLoggedIn && (
      <li>
        <NavLink to='/concept-selection' onClick={props.handleClearSelections}>New Worksheet</NavLink>
      </li>
      )}
      {auth.isLoggedIn && (
      <li>
        <NavLink to={`/worksheets/${auth.userId}`}>My Collection</NavLink>
      </li>
      )}
      {!auth.isLoggedIn && (
      <li>
        <NavLink to='/auth'>Log in</NavLink>
      </li>
      )}
      {auth.isLoggedIn && (
      <li>
        <button onClick={auth.logout}>
          Log out
        </button>
      </li>
      )}

    </ul>
  )
}

export default NavLinks