import { faClock, faObjectGroup } from '@fortawesome/free-regular-svg-icons';
import { faDiamond, faDiamondTurnRight, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const ChooseUs = () => {
  return (
    <>

      <section id="why-us" class="wow fadeIn">
        <div class="container">
          <header class="section-header">
            <h3>Why choose us?</h3>
            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
          </header>

          <div class="row row-eq-height justify-content-center">

            <div class="col-lg-4 mb-4">
              <div class="card wow bounceInUp">
                <FontAwesomeIcon icon={faDiamond} className='h-16'></FontAwesomeIcon>
                <div class="card-body">
                  <h5 class="card-title">Corporis dolorem</h5>
                  <p class="card-text">Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut voluptatibus.</p>
                  <a href="#" class="readmore">Read more </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 mb-4">
              <div class="card wow bounceInUp">
                <FontAwesomeIcon icon={faLanguage} className='h-16'></FontAwesomeIcon>
                <div class="card-body">
                  <h5 class="card-title">Voluptates dolores</h5>
                  <p class="card-text">Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.</p>
                  <a href="#" class="readmore">Read more </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 mb-4">
              <div class="card wow bounceInUp">
                <FontAwesomeIcon icon={faObjectGroup} className='text- h-16'></FontAwesomeIcon>
                <div class="card-body">
                  <h5 class="card-title">Eum ut aspernatur</h5>
                  <p class="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>
                  <a href="#" class="readmore">Read more </a>
                </div>
              </div>
            </div>

          </div>

          <div class="row counters">

            <div class="col-lg-3 col-6 text-center">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp end={1000} /> : null}
                  </div>
                )}
              </VisibilitySensor>
              <p>Clients</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp end={1000} /> : null}
                  </div>
                )}
              </VisibilitySensor>
              <p>Projects</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp end={1000} /> : null}
                  </div>
                )}
              </VisibilitySensor>
              <p>Hours Of Support</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp end={1000} /> : null}
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