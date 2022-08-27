import React from 'react';
import intro from '../images/intro-img.svg';

const Banner = () => {
    return (
        // <div class="card h-screen image-full">
        //     <figure><img src={intro} alt="Shoes" /></figure>
        //     <div class="card-body">
        //         <h2 class="card-title">Shoes!</h2>
        //         <p>If a dog chews shoes whose shoes does he choose?</p>
        //     </div>
        // </div>
        <div>
            <section id="intro" class="clearfix">
                <div class="container">

                    <div class="intro-img">
                        <img src={intro} alt="" class="img-fluid" />
                    </div>

                    <div class="intro-info">
                        <h2>We provide<br /><span>solutions</span><br />for your business!</h2>
                        <div>
                            <a href="#about" class="btn-get-started scrollto">Get Started</a>
                            <a href="#services" class="btn-services scrollto">Our Services</a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Banner;