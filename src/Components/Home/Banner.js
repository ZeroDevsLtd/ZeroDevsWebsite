import React from 'react';
import intro from '../images/intro-img.svg';
import content from '../../content/websiteContent';

const Banner = () => {
    return (
        <div>
            <section id="intro" class="clearfix" style={{ background: '#f8f6f3', color: '#111' }}>
                <div class="container" style={{ background: '#f8f6f3', color: '#111' }}>

                    <div class="intro-img">
                        <img src={intro} alt="" class="img-fluid" />
                    </div>

                    <div class="intro-info" style={{ color: '#111' }}>
                        <h2 style={{ color: '#111' }}>{content.banner.headline}</h2>
                        <h3 style={{ color: '#111', fontWeight: 600, marginTop: 16 }}>{content.banner.subheadline}</h3>
                        <p style={{ color: '#111', marginTop: 8 }}>{content.banner.description}</p>
                        <div>
                            <a href="#services" class="btn-services scrollto">Our Services</a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Banner;