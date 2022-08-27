import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faChartBar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';

const Services = (props) => {
  return (
    <div>
      <section id="services" class="section-bg">
        <div class="container">

          <header class="section-header">
            <h3>Services</h3>
            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
          </header>

          <div data-aos={props.aos} data-aos-offset={props.aos_offset} class="row">

            <div data-aos="fade-right" class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" >
              <div  class="box">
                <div class="icon"><FontAwesomeIcon icon={faClock} className='h-16'></FontAwesomeIcon></div>
                <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
            <div data-aos="fade-left" class="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
              <div class="box">
                <div class="icon"><FontAwesomeIcon icon={faGlobe} className='h-16'></FontAwesomeIcon></div>
                <h4 class="title"><a href="">Dolor Sitema</a></h4>
                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
            </div>

            <div data-aos="fade-left" class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
              <div class="box">
                <div class="icon"><FontAwesomeIcon icon={faStopwatch} className='h-16'></FontAwesomeIcon></div>
                <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
            <div data-aos="fade-right" class="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
              <div class="box">
                <div class="icon"><FontAwesomeIcon icon={faPagelines} className='h-16'></FontAwesomeIcon></div>
                <h4 class="title"><a href="">Magni Dolores</a></h4>
                <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
            </div>

            <div data-aos="data-left" class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
              <div class="box">
                <div class="icon"><FontAwesomeIcon icon={faBookmark} className='h-16'></FontAwesomeIcon></div>
                <h4 class="title"><a href="">Nemo Enim</a></h4>
                <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>
            <div data-aos="fade-right" class="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
              <div class="box">
                <div class="icon"><FontAwesomeIcon icon={faChartBar} className='h-16'></FontAwesomeIcon></div>
                <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
                <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;