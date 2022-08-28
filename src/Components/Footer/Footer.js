import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlus, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6 footer-info">
            <h3>ZeroDevs</h3>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to=''>Home</Link></li>
              <li><Link to=''>About us</Link></li>
              <li><Link to=''>Services</Link></li>
              <li><Link to=''>Terms of service</Link></li>
              <li><Link to=''>Privacy policy</Link></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
            A108 Adam Street <br/>
              New York, NY 535022 <br/>
              United States <br/>
              <strong>Phone:</strong> +1 5589 55488 55 <br/>
              <strong>Email:</strong> info@example.com <br/>
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
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
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