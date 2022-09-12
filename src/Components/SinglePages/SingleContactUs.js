import React from 'react';
// import { Navbar } from 'react-bootstrap';
import Hero from '../Sheare/Hero';

const SingleContactUs = () => {
  return (
    <>
      <Hero></Hero>
      <section id='contact'>
        <div className='container mb-5'>
          <h1 className='text-3xl text-center p-4 mt-3'>Contact Us</h1>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className=''>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.0983122321464!2d90.38670342922897!3d23.875670199033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5bd946664ff%3A0xe30ae8fd1607aae!2sZeroDevs!5e0!3m2!1sen!2sbd!4v1661867024233!5m2!1sen!2sbd" className='w-full h-full' style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className=''>
              <form class="contactForm ">
                <div class="form-row">
                  <div class="form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div class="validation"></div>
                  </div>
                  <br />
                  <div class="form-group">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div class="validation"></div>
                  </div>
                  <br />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <br />
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div class="validation"></div>
                </div>
                <br />
                <div class="text-center"><button className='btn btn-primary' type="submit" title="Send Message">Send Message</button></div>
              </form></div>
          </div >
        </div>

      </section>
    </>
  );
};

export default SingleContactUs;