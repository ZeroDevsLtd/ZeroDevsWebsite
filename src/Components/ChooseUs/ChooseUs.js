import { faObjectGroup } from '@fortawesome/free-regular-svg-icons';
import { faDiamond, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';

const ChooseUs = (props) => {

  const [chooses, setChooses] = useState([]);
  console.log(chooses);

  useEffect(()=>{
    fetch('http://localhost:5000/choose-us')
    .then(res => res.json())
    .then(data => setChooses(data))
  },[])
  return (
    <>
      <section id="why-us" data-aos={props.aos} data-aos-offset={props.aos_offset} class="wow fadeIn">
        <div class="container">
          <header class="section-header">
            <h3>Why choose us?</h3>
            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
          </header>

          <div class="row row-eq-height justify-content-center">

            {
              chooses.map(choose =>{
                return (
                  <div data-aos="fade-up" class="col-lg-4 mb-4">
              <div class="card wow bounceInUp">
                {/* <FontAwesomeIcon icon={faDiamond} className='h-16'></FontAwesomeIcon> */}
                <i className='grid place-items-center '>
                  <img className='bg-white rounded-lg h-16' src={choose.image} alt="" />
                  </i>
                <div class="card-body">
                  <h5 class="card-title">{choose.title}</h5>
                  <p class="card-text">{choose.description}</p>
                  <Link to='' className='text-decoration-none readmore'>Read more </Link>
                </div>
              </div>
            </div>
                )
              })
            }
          </div> 
          <div class="row counters">

            <div class="col-lg-3 col-6 text-center">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp end={274} /> : null}
                  </div>
                )}
              </VisibilitySensor>
              <p>Clients</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp end={421} /> : null}
                  </div>
                )}
              </VisibilitySensor>
              <p>Projects</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp end={1364} /> : null}
                  </div>
                )}
              </VisibilitySensor>
              <p>Hours Of Support</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp end={18} /> : null}
                  </div>
                )}
              </VisibilitySensor>
              <p>Hard Workers</p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default ChooseUs;