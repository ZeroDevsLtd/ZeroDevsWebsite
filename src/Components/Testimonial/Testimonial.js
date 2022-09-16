import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Testimonial.css'
import { Testimonials } from '../Portfolio/Elements';

const Testimonial = () => {

  // const [testimonials, setTestimonials] = useState(Testimonials);
  const [testimonials, setTestimonials] = useState([]);
  useEffect(()=>{
      fetch('https://webbackend-production.up.railway.app/testimonial')
      .then(res=>res.json())
      .then(data=>setTestimonials(data))
  },[])
console.log(testimonials);
  return (
    <div>
      <section id="testimonials" className="section-bg">
        <div className="container">
          <header className="section-header">
            <h3>Testimonials</h3>
          </header>
          <div
            className="row justify-content-center">
            <div className="col-lg-8">
              <OwlCarousel
                items={1}
                loop={true}
                nav={false}
                dots={true}
                autoplay={true} className="owl-carousel testimonials-carousel wow fadeInUp">
                {
                  testimonials.map(testimonial => {
                    return (
                      <div className="testimonial-item">
                        <img src={testimonial.image} className="testimonial-img" alt="" />
                        <h3>{testimonial.name}</h3>
                        <h4>{testimonial.title}</h4>
                        <p>
                          {testimonial.description}
                        </p>
                      </div>
                    )
                  })
                }
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Testimonial;