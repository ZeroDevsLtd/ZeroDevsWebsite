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
    <li class="nav-item"><Link className='text-decoration-none nav-link active' to='/'>Home </Link></li>
    <li class="nav-item"><Link className='text-decoration-none nav-link active' to='/about'>About Us </Link></li>
    <li class="nav-item"><Link className='text-decoration-none nav-link active' to='/service'>Service </Link></li>
    <li class="nav-item"><Link className='text-decoration-none nav-link active' to='/portfolio'>Portfolio </Link></li>
    <li class="nav-item"><Link className='text-decoration-none nav-link active' to='/team'>Team </Link></li>
    <li class="nav-item"><Link className='text-decoration-none nav-link active' to='/contact'>Contact us </Link></li>
  </>

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 5px";
//     document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "40px 10px";
//     document.getElementById("logo").style.fontSize = "35px";
//   }
// }


  return (

    // bootstrap navbar

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container">
    {/* <a  href="#">Navbar</a> */}
    <Link id='logo' to='/'><img src={logo} alt="" className=' h-6 w-40 mb-2' /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        {menuItems}
      </ul>
       
    </div>
  </div>
</nav>
  );
};

export default Navbar;