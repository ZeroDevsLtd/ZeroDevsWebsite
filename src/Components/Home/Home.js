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
const Home = () => {

    useEffect(()=>{
        Aos.init({duration:'3000'});
    },[])
    return (
        
        <>
        <Banner></Banner>
        <AboutUs Aos={Aos}></AboutUs>
        <Services Aos={Aos}></Services>
        <ChooseUs Aos={Aos}></ChooseUs>
        <Testimonial></Testimonial>
       <Team
       Aos={Aos}></Team>
        <Portfolio></Portfolio>
        <Client Aos={Aos}></Client>
        <Contact></Contact>
        </>
    );
};

export default Home;