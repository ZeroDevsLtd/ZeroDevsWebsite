import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Testimonial.css'
import { useQuery } from 'react-query';
import Loading from '../Sheare/Loading';

const Testimonial = () => {

  const [testimonials, setTestimonials] = useState([]);
  const [error,setError] = useState('');

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://51.159.105.249:18520/testimonial", requestOptions)
      .then(response => response.json())
      .then(result => setTestimonials(result))
      .catch(error => setError('This section is under construction'));
  }, [])

  // if(isLoading){
  //   return <Loading></Loading>
  // }
  return (
    <div>
      <section id="testimonials" className="section-bg">
        <div className="container">
          <header className="section-header">
            <h3>Testimonials</h3>
          </header>
          <div className="row justify-content-center">
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
          {
            error &&
            <p className='error fst-italic shadow-md bg-success bg-opacity-10'>{error}</p>
          }
        </div>
      </section >
    </div >
  );
};

export default Testimonial;