// Navbar.tsx

import React from 'react';

function Navbar() {
  return (
    <nav className='nav'>
        <a href='/' className='Title-proj'>FoodWaste</a>
        <ul>
            <li>
            <a href='/Home' style={{ marginRight: '1rem' }}>Home</a>
            <a href='/About' style={{ marginRight: '1rem' }}>About</a>
            <a href='/Contact' style={{ marginRight: '1rem' }}>Contact</a>
            <a href='/Signin' style={{ marginRight: '1rem' }}>Signin</a>
            </li>
        </ul>


    </nav>
  );
}

export default Navbar;
