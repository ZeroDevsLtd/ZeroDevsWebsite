import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../../firebase.init';
import logo from '../images/logo.png';
import content from '../../content/websiteContent';

const Navbar = () => {
    const location = useLocation();
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };

    const menuItems = <>
        <li><Link className={`text-black text-decoration-none pb-1 ${location.pathname === '/' ? 'border-b-2 border-blue-900' : 'border-b-2 border-transparent'}`} to='/'>{content.navbar.home}</Link></li>
        <li><Link className={`text-black text-decoration-none pb-1 ${location.pathname === '/about' ? 'border-b-2 border-blue-900' : 'border-b-2 border-transparent'}`} to='/about'>{content.navbar.about}</Link></li>
        <li><Link className={`text-black text-decoration-none pb-1 ${location.pathname === '/service' ? 'border-b-2 border-blue-900' : 'border-b-2 border-transparent'}`} to='/service'>{content.navbar.services}</Link></li>
        <li><Link className={`text-black text-decoration-none pb-1 ${location.pathname === '/products' ? 'border-b-2 border-blue-900' : 'border-b-2 border-transparent'}`} to='/products'>Products</Link></li>
        <li><Link className={`text-black text-decoration-none pb-1 ${location.pathname === '/career' ? 'border-b-2 border-blue-900' : 'border-b-2 border-transparent'}`} to='/career'>{content.navbar.career}</Link></li>
        <li><Link className={`text-black text-decoration-none pb-1 ${location.pathname === '/contact' ? 'border-b-2 border-blue-900' : 'border-b-2 border-transparent'}`} to='/contact'>{content.navbar.contact}</Link></li>
    </>


    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px', width: '100%' }}>
          <div className="fixed-top navbar bg-[#f8f6f3]" style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.06)' }}>
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:invisible">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#f8f6f3] rounded-box w-52">
                  {menuItems}
                </ul>
              </div>
              <img src={logo} alt="" className='ml-16 h-6 w-40' />
            </div>
            <div className="navbar-center hidden lg:flex mr-5 ">
              <ul className="menu menu-horizontal p-0">
                {menuItems}
              </ul>
            </div>
          </div>
        </div>
    );
};

export default Navbar;