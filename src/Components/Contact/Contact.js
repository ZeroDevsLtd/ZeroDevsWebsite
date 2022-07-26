import { faLocation, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div class="container-fluid">

          <div class="section-header">
            <h3>Contact Us</h3>
          </div>

          <div class="row wow fadeInUp">

            <div class="col-lg-6">
              <div class="map mb-4 mb-lg-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{border: 0, width: '100%', height: '312px'}} allowFullScreen />
               
            </div>
          </div>

          <div class="col-lg-6">
            <div class="row">
              <div class="col-md-5 info flex">
                <FontAwesomeIcon icon={faLocation} className='h-4'></FontAwesomeIcon>
                <p>A108 Adam Street, NY 535022</p>
              </div>
              <div class="col-md-4 info flex place-item-center space-x-0">
                <FontAwesomeIcon icon={faVoicemail} className='h-4'></FontAwesomeIcon>
                <p>info@example.com</p>
              </div>
              <div class="col-md-3 info flex space-x-0">
                <FontAwesomeIcon icon={faPhone} className='h-4'></FontAwesomeIcon>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div class="form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-row">
                  <div class="form-group col-lg-6">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div class="validation"></div>
                  </div>
                  <div class="form-group col-lg-6">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div class="validation"></div>
                </div>
                <div class="text-center"><button type="submit" title="Send Message">Send Message</button></div>
              </form>
            </div>
          </div>

        </div>

    </div>
    </section >
        </div >
    );
};

export default Contact;