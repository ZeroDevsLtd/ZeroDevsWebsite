import React, { useEffect, useState } from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Client from '../Client/Client';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Portfolio from '../Portfolio/Portfolio';
import Packages from '../Packages/Packages';
const Home = () => {

    useEffect(()=>{
        Aos.init({duration:'3000'});
    },[])
    return (
        
        <div className=''>
        <Banner></Banner>
        <AboutUs Aos={Aos}></AboutUs>
        <Services Aos={Aos}></Services>
        <Packages></Packages>
        <ChooseUs Aos={Aos}></ChooseUs>
        <Testimonial></Testimonial>
       <Team
       Aos={Aos}></Team>
        <Portfolio Aos={Aos}></Portfolio>
        <Client Aos={Aos}></Client>
        <Contact></Contact>
        </div>
    );
};

export default Home;