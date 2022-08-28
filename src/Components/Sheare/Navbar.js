import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../images/logo.png';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };

    const menuItems = <>
        <li><Link className='text-decoration-none' to='/'>Home </Link></li>
        <li><Link className='text-decoration-none' to='/about'>About Us </Link></li>
        <li><Link className='text-decoration-none' to='/service'>Service </Link></li>
        <li><Link className='text-decoration-none' to='/portfolio'>Portfolio </Link></li>
        <li><Link className='text-decoration-none' to='/team'>Team </Link></li>
        <li><Link className='text-decoration-none' to='/contact'>Contact us </Link></li>
    </>


    return (
        <div class="fixed-nav-bar fixed-top navbar text-white">
  <div class="navbar-start">
    <div class="dropdown ">
      <label tabindex="0" className="btn btn-ghost lg:invisible ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-0 shadow bg-gray-700 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to='/'><img src={logo} alt="" className='ml-16 h-6 w-40 mb-4' /></Link>
  </div>
  <div class="navbar-center hidden lg:flex mr-5 ">
    <ul class="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
</div>
    );
};

export default Navbar;