import React from 'react';
import Logout from '../Logout/LogOut';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import './Nav.css';

export default function Nav() {
  return (
    <nav className='nav'>
      <p className='logo'>app@todo</p>
      <FontAwesomeIcon id='nav__search' icon={faMagnifyingGlass} />
      <FontAwesomeIcon id='nav__notifications' icon={faBell} />
      <Logout />
    </nav>
  );
}
