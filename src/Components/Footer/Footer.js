import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import content from '../../content/websiteContent';

const Footer = () => {
    const navigate = useNavigate();

    const handleOfficeDoubleClick = () => {
        navigate('/login');
    };

    return (
        <div>
            <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6 footer-info">
            <h3>ZeroDevs</h3>
            <p>{content.footer.description}</p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/terms">Terms of service</Link></li>
              <li><Link to="/privacy">Privacy policy</Link></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>{content.contact.title}</h4>
            <p>
            {content.contact.address.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}<br/>
              </React.Fragment>
            ))}
              <strong>Phone:</strong> {content.contact.phone} <br/>
              <strong>Email:</strong> {content.contact.email} <br/>
            </p>

            <div class="social-links">
              <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
              <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
              <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            </div>

          </div>

          <div class="col-lg-3 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Stay updated with the latest news, insights, and exclusive offers from ZeroDevs. Subscribe to our newsletter and never miss an update!</p>
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
        &copy; Copyright <strong>ZeroDevs</strong>. All Rights Reserved{' '}
        <button 
          onDoubleClick={handleOfficeDoubleClick}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            fontSize: 'inherit',
            padding: '0',
            marginLeft: '5px',
            textDecoration: 'none'
          }}
        >
          office
        </button>
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