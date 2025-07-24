import React from 'react';
import intro from '../images/intro-img.svg';
import content from '../../content/websiteContent';
import BackgroundDecor from '../Sheare/BackgroundDecor';
import Lottie from "lottie-react";

const bannerCircles = [
  { type: 'circle', color: '#60a5fa', opacity: 0.18, size: 80, style: { top: '6%', left: '8%' }, animationName: 'moveCircle1', animationDuration: 22 },
  { type: 'circle', color: '#fbbf24', opacity: 0.13, size: 100, style: { top: '12%', right: '10%' }, animationName: 'moveCircle2', animationDuration: 28 },
  { type: 'circle', color: '#34d399', opacity: 0.15, size: 60, style: { top: '18%', left: '40%' }, animationName: 'moveCircle3', animationDuration: 24 },
];

const Banner = () => {
    return (
        <div className="relative" style={{ background: '#f8f6f3' }}>
            <BackgroundDecor shapes={bannerCircles} />
            <section id="intro" className="clearfix" style={{ background: 'transparent', color: '#111' }}>
                <div className="container" style={{ background: 'transparent', color: '#111' }}>

                    <div className="intro-img flex justify-center items-center w-full" style={{ minHeight: '320px' }}>
                        <Lottie
                          animationData={require("./Business_team.json")}
                          loop
                          autoplay
                          style={{ width: '100%', maxWidth: '600px', height: 'auto', minHeight: '320px' }}
                        />
                    </div>

                    <div className="intro-info" style={{ color: '#111' }}>
                        <h2 style={{ color: '#0a2259' }}>{content.banner.headline}</h2>
                        <h3 style={{ color: '#0a2259', fontWeight: 600, marginTop: 16 }}>
                            <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#007bff', fontWeight: 800, letterSpacing: '2px' }}>
                                ZERODEVS
                            </span>
                            <span> - Your trusted Software Development Partner</span>
                        </h3>
                        <p style={{ color: '#111', marginTop: 8, paddingRight: 32 }}>{content.banner.description}</p>
                        <div>
                            <a href="#services" className="btn-services scrollto">Our Services</a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Banner;