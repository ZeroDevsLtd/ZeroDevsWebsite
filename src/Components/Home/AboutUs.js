import React from 'react';
import Lottie from "lottie-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm, faShoppingBag, faProjectDiagram, faHeadset, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faBarChart } from '@fortawesome/free-regular-svg-icons';
import content from '../../content/websiteContent';
import './AboutUs.css';
import about1 from '../../Components/images/about-img.svg';
import about2 from '../../Components/images/about-extra-1.svg';
import about3 from '../../Components/images/about-extra-2.svg';

const AboutUs = (props) => {
  // console.log(props);
    return (
       <>
       <section id="about" style={{ background: '#f8f6f3', color: '#111' }}>
      <div class="container" style={{ background: '#f8f6f3', color: '#111' }}>

        <header class="section-header" style={{ color: '#0a2259' }}>
          <h3 style={{ color: '#0a2259', textTransform: 'uppercase', fontWeight: 700, fontSize: 36 }}>{content.about.title}</h3>
          <p style={{ color: '#111' }}>{content.about.description}</p>
        </header>

        <div class="row about-container" data-aos={props.aos} data-aos-offset={props.aos_offset}>

          <div data-aos="fade-up" class="col-lg-6 content order-lg-1 order-2">
            {content.about.iconFeatures.map((feature, idx) => {
              let icon;
              if (feature.icon === 'faShoppingBag') icon = faShoppingBag;
              else if (feature.icon === 'faPhotoFilm') icon = faPhotoFilm;
              else if (feature.icon === 'faBarChart') icon = faBarChart;
              else if (feature.icon === 'faProjectDiagram') icon = faProjectDiagram;
              else if (feature.icon === 'faHeadset') icon = faHeadset;
              else if (feature.icon === 'faHandshake') icon = faHandshake;
              return (
                <div className="icon-box wow fadeInUp aboutus-icon-box" key={idx} style={{ color: '#111' }}>
                  <div class="icon"><FontAwesomeIcon icon={icon} className='text-2xl' style={{color:'#1a237e'}} /></div>
                  <h4 class="title" style={{ color: '#0a2259', fontWeight: 700, fontSize: 20 }}>{feature.title}</h4>
                  <p class="description" style={{ color: '#111' }}>{feature.text}</p>
                </div>
              );
            })}
          </div>

          <div data-aos="fade-up" class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <img src={about1} class="img-fluid w-96 h-96 ml-20 mt-8" alt=""/>
          </div>
        </div>

        <div data-aos={props.aos} data-aos-offset={props.aos_offset} class="row about-extra">
          <div data-aos="fade-up" class="col-lg-6 wow fadeInUp">
            <img src={about2} class="img-fluid w-96 h-96" alt=""/>
          </div>
          <div data-aos="fade-up" class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4 style={{ color: '#0a2259', fontWeight: 700 }}>{content.about.extraHeading}</h4>
            <p style={{ color: '#111' }}>{content.about.extraParagraph1}</p>
            <p style={{ color: '#111' }}>{content.about.extraParagraph2}</p>
            <p style={{ color: '#111' }}>{content.about.extraParagraph3}</p>
          </div>
        </div>

        <div data-aos={props.aos} data-aos-offset={props.aos_offset} class="row about-extra">
          <div data-aos="fade-up" class="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src={about3} class="img-fluid w-96 h-96 ml-20" alt=""/>
          </div>

          <div data-aos="fade-up" class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4 style={{ color: '#111' }}>Empowering Your Digital Future</h4>
            <div>
            <p style={{ color: '#111' }}>
              At ZeroDevs, we believe in transforming ideas into impactful digital solutions. Our team of expert engineers and innovators is dedicated to helping businesses thrive in a rapidly evolving technological landscape.
            </p>
            <p style={{ color: '#111' }}>
              From custom software and SaaS products to global talent hiring, we provide end-to-end services that drive growth, efficiency, and long-term success. We work as an extension of your team, ensuring seamless collaboration and outstanding results.
            </p>
            <p style={{ color: '#111' }}>
              Partner with ZeroDevs to unlock new opportunities, scale your business, and stay ahead of the competition. Your vision, our expertise—together, we build the future.
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