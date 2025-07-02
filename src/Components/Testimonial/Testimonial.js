import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Testimonial.css'
import testimonial1 from '../../Components/images/testimonial-1.jpg'
import testimonial2 from '../../Components/images/testimonial-2.jpg'
import testimonial3 from '../../Components/images/testimonial-3.jpg'
import testimonial4 from '../../Components/images/testimonial-4.jpg'
import testimonial5 from '../../Components/images/testimonial-5.jpg'
import content from '../../content/websiteContent';

const Testimonial = () => {
  return (
    <div>
      <section id="testimonials" className="section-bg">
        <div className="container">
          <header className="section-header" style={{ color: '#0a2259' }}>
            <h3>{content.testimonial.title}</h3>
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
                <div className="testimonial-item">
                  <img src={testimonial1} className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  </p>
                </div>
                <div className="testimonial-item">
                  <img src={testimonial2} className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <p>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  </p>
                </div>
                <div className="testimonial-item">
                  <img src={testimonial3} className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <p>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  </p>
                </div>
                <div className="testimonial-item">
                  <img src={testimonial4} className="testimonial-img" alt="" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <p>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  </p>
                </div>
                <div className="testimonial-item">
                  <img src={testimonial5} className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <p>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  </p>
                </div>
            </OwlCarousel>
          </div>
        </div>
    </div>
      </section >
    </div >
  );
};

export default Testimonial;