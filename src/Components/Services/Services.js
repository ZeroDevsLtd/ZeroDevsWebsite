import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faChartBar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';

const Services = (props) => {

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/service')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div>
      <section id="services" class="section-bg">
        <div class="container">

          <header class="section-header">
            <h3>Services</h3>
            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
          </header>

          <div data-aos={props.aos} data-aos-offset={props.aos_offset} class="row">

            {
              services.map(service => {
                return (
                  <div data-aos="fade-right" class="col-md-6 col-lg-5 wow bounceInUp offset-lg-1" >
                    <div class="box">
                      <div class="icon"><img src={service.image} alt="" /></div>
                      <h4 class="title"><a href="">{service.name}</a></h4>
                      <p class="description">{service.description}</p>
                    </div>
                  </div>
                )
              })
            }

          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;