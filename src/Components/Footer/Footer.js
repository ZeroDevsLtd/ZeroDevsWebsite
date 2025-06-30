import React from 'react';
import content from '../../content/websiteContent';

const Footer = () => {
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
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>{content.contact.title}</h4>
            <p>
            {content.contact.address} <br/>
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