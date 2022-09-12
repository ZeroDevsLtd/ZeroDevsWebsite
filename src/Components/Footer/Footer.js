import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlus, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {

  const scroll = () => {
    window.scrollTo(0, 0);
  }

    return (
        <div>
            <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6 footer-info">
            <h3>ZeroDevs</h3>
            <p>Our complete spectrum of mobile app development and web solutions help businesses to create outcome-focused solutions with enhanced agility .</p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link onClick={scroll} to='/'>Home</Link></li>
              <li><Link onClick={scroll} to='/about'>About us</Link></li>
              <li><Link onClick={scroll} to='/service'>Services</Link></li>
              <li><Link onClick={scroll} to='/terms'>Terms of service</Link></li>
              <li><Link onClick={scroll} to=''>Privacy policy</Link></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
            2049 Mcgrow Ave,Bronx <br/>
              New York, USA <br/>
              37/18, Sector-11 Uttara<br/>
              Dhaka,Bangladesh <br/>
              <strong>Phone:</strong> +880 1521415838 <br/>
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> (937) 612-2367 <br/>
              <strong>Email:</strong> info@zerodevs.com <br/>
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> zerodevs@gmail.com <br/>
            </p>

            <div class="social-links">
              <Link to='' class="twitter"><FontAwesomeIcon icon={faTwitterSquare} /></Link>
              <Link to='' class="facebook"><FontAwesomeIcon icon={faFacebookF} /></Link>
              <Link to='' class="google-plus"><FontAwesomeIcon icon={faGooglePlus} /></Link>
              <Link to='' class="linkedin"><FontAwesomeIcon icon={faLinkedin} /></Link>
            </div>
            
          </div>

          <div class="col-lg-3 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Please enter your email</p>
            <form>
            <input type="email" name="email"/>
            <input type="submit"  value="Subscribe"/>
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>ZeroDevs</strong>. All Rights Reserved
      </div>
      <div class="credits">
       
        Designed by <a href="https://zerodevs.com/">Zerodevs</a>
      </div>
    </div>
  </footer>
        </div>
    );
};

export default Footer;