import React from 'react';
import about1 from '../../Components/images/about-img.svg';
import about2 from '../../Components/images/about-extra-1.svg';
import about3 from '../../Components/images/about-extra-2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faBarChart } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';

const AboutUs = (props) => {
  // console.log(props);
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/about-us')
      .then(res => res.json())
      .then(data => setAbouts(data))
  }, [])
  return (
    <>
      <section id="about">
        <div class="container">

          <header class="section-header">
            <h3>About Us</h3>
            <p>Our complete spectrum of mobile app development and web solutions help businesses to create
              outcome-focused solutions with enhanced agility
              .</p>
          </header>

          <div class="row about-container" data-aos={props.aos} data-aos-offset={props.aos_offset}>

            <div data-aos="fade-up" class="col-lg-6 content order-lg-1 order-2 ">
              <p>
                Our complete spectrum of mobile app development and web solutions help businesses to create outcome-focused solutions with enhanced agility that help them to rapidly reshape, renew and build new capabilities for their business.
              </p>

              <div class="icon-box wow fadeInUp">
                <div class="icon"><FontAwesomeIcon icon={faShoppingBag} className='text-2xl text-blue-700'></FontAwesomeIcon></div>
                <h4 class="title">Process & Quality</h4>
                <p class="description">
                  We follow an agile project management system which reduces our development cost and helps to meet deadlines. Our dedicated QA team ensures excellent product quality.
                </p>
              </div>

              <div class="icon-box wow fadeInUp">
                <div class="icon"><FontAwesomeIcon icon={faPhotoFilm} className='text-2xl text-blue-700'></FontAwesomeIcon></div>
                <h4 class="title">Customer Support</h4>
                <p class="description">
                  There are two offices located in New York and one in Dhaka making a team who will support its clients round the clock.
                </p>
              </div>

              <div class="icon-box wow fadeInUp" >
                <div class="icon"><FontAwesomeIcon icon={faBarChart} className='text-2xl text-blue-700'></FontAwesomeIcon></div>
                <h4 class="title">Customer RelationShip</h4>
                <p class="description">
                  We always go the extra mile to maintain long lasting relationships with our partners & clients.
                </p>
              </div>

            </div>

            <div data-aos="fade-up" class="col-lg-6 background order-lg-2 order-1 wow fadeInUp grid place-items-center">
              <img src={about1} class="img-fluid w-96 h-96 mt-8" alt="" />
            </div>
          </div>

          <div data-aos={props.aos} data-aos-offset={props.aos_offset} class="row about-extra">
            <div data-aos="fade-up" class="col-lg-6 wow fadeInUp">
              <img src={about2} class="img-fluid w-96 h-96" alt="" />
            </div>
            <div data-aos="fade-up" class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
              {/* <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4> */}
              <p>
                <b> ZeroDevs Limited</b> is one of the leading IT/Software solution provider companies in Bangladesh.


              </p>
              <p>
                ZeroDevs is involved in designing, developing, implementing and maintaining business application software for both domestic and overseas markets.
              </p>
              <p>
                Our complete spectrum of mobile app development and web solutions help businesses to create outcome-focused solutions with enhanced agility that help them to rapidly reshape, renew and build new capabilities for their business.

              </p>
            </div>
          </div>

          <div data-aos={props.aos} data-aos-offset={props.aos_offset} class="row about-extra">
            <div data-aos="fade-up" class="col-lg-6 wow fadeInUp order-1 order-lg-2 grid place-items-center">
              <img src={about3} class="img-fluid w-96 h-96 " alt="" />
            </div>

            <div data-aos="fade-up" class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
              {/* <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4> */}
              <div>
                <p>
                  <b>ZeroDevs Limited</b> provides complete life cycle of software development services including system analysis, use case development, system architecture & design, system integration, web API development, UI/UX design, database design and administration, functional and system­­­­ testing, quality assurance and project management.
                </p>
                <p>
                  We are mainly a software & mobile app development company specializing in AR/VR, IoT, AI/ML, Web & Windows System and Android & iOS. We follow an agile project management system which reduces our development cost and helps to meet deadlines. Our dedicated QA team ensures excellent product quality.

                </p>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default AboutUs;