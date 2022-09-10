import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Components/images/intro-bg.png';

const Hero = () => {
    return (
        <div className="hero h-96 mt-16" style={{ backgroundImage: `url("https://i.ibb.co/7gBvrHJ/hero.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-3 text-4xl font-bold">We provide solutions<br/>for your business!</h1>
                <p className="mb-5">Our complete spectrum of mobile app development and web solutions help businesses to create outcome-focused solutions with enhanced agility that help them to rapidly reshape, renew and build new capabilities for their business.</p>
                <Link to='/contact'><button className="btn btn-primary">Contact Us</button></Link>
            </div>
        </div>
        </div >
    );
};

export default Hero;