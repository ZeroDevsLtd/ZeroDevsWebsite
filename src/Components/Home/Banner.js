import React from 'react';
import intro from '../images/intro-img.svg';
import content from '../../content/websiteContent';

const Banner = () => {
    return (
        <div>
            <section id="intro" class="clearfix">
                <div class="container">

                    <div class="intro-img">
                        <img src={intro} alt="" class="img-fluid" />
                    </div>

                    <div class="intro-info">
                        <h2>{content.banner.headline}<br /><span>{content.banner.subheadline}</span></h2>
                        <div>
                            <a href="#about" class="btn-get-started scrollto">{content.banner.cta}</a>
                            <a href="#services" class="btn-services scrollto">Our Services</a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Banner;