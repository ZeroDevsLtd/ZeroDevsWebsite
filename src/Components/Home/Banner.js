import React from 'react';
import { Link } from 'react-router-dom';
import intro from '../images/intro-img.svg';

const Banner = () => {
    return (
            <section id="intro" class="clearfix">
                <div class="container">

                    <div class="intro-img">
                        <img src={intro} alt="" class="img-fluid" />
                    </div>

                    <div class="intro-info">
                        <h2>We provide<br /><span>solutions</span><br />for your business!</h2>
                        <div>
                            <Link to='/contact' class="btn-get-started scrollto">Get Started</Link>
                            <Link to='/service' class="btn-services scrollto">Our Services</Link>
                        </div>
                    </div>

                </div>
            </section>
    );
};

export default Banner;