import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    let menuChange = document.querySelectorAll('.linkChange');
    menuChange.forEach(mc => {
      mc.addEventListener('click', function () {
        menuChange.forEach(lnk => lnk.classList.remove('change'))
        this.classList.add('change')
      })
    })
  }, [])

  const scroll = () => {
    window.scrollTo(0, 0);
  }


  const menuItems =
    <>
      <li class="nav-item"><Link onClick={scroll} className='text-decoration-none nav-link active effect linkChange' to='/'>Home </Link></li>
      <li class="nav-item"><Link onClick={scroll} className='text-decoration-none nav-link active effect linkChange' to='/service'>Service</Link></li>
      <li class="nav-item"><Link onClick={scroll} className='text-decoration-none nav-link active effect linkChange' to='/portfolio'>Portfolio</Link></li>
      <li class="nav-item"><Link onClick={scroll} className='text-decoration-none nav-link active effect linkChange' to='/about'>About Us </Link></li>
      <li class="nav-item"><Link onClick={scroll} className='text-decoration-none nav-link active effect linkChange' to='/career'>Career </Link></li>
      <li class="nav-item"><Link onClick={scroll} className='text-decoration-none nav-link active effect linkChange' to='/team'>Team</Link></li>
      <li class="nav-item"><Link onClick={scroll} className='text-decoration-none nav-link active effect linkChange' to='/contact'>Contact Us</Link></li>

    </>



  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "0px 0px";
      document.getElementById("logo").style.fontSize = "15px";
    } else {
      document.getElementById("navbar").style.padding = "20px 5px";
      document.getElementById("logo").style.fontSize = "5px";
    }
  }


  return (

    <nav id='navbar' class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <Link onClick={scroll} id='logo' to='/'><img src={logo} alt="" className='real h-6 w-40 linkChange' /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0 nav-links">

            {menuItems}

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;