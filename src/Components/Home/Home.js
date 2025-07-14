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
import WhatWeOffer from './WhatWeOffer';
import BackgroundDecor from '../Sheare/BackgroundDecor';
const circleConfigs = [
  { type: 'circle', color: '#60a5fa', opacity: 0.18, size: 80, style: { top: '10%', left: '8%' }, animationName: 'moveCircle1', animationDuration: 22 },
  { type: 'circle', color: '#fbbf24', opacity: 0.13, size: 120, style: { top: '60%', left: '20%' }, animationName: 'moveCircle2', animationDuration: 30 },
  { type: 'circle', color: '#34d399', opacity: 0.15, size: 60, style: { top: '30%', right: '10%' }, animationName: 'moveCircle3', animationDuration: 26 },
  { type: 'circle', color: '#0ea5e9', opacity: 0.12, size: 100, style: { bottom: '10%', right: '20%' }, animationName: 'moveCircle2', animationDuration: 32 },
  { type: 'circle', color: '#a78bfa', opacity: 0.15, size: 90, style: { top: '15%', left: '15%' }, animationName: 'moveCircle1', animationDuration: 24 },
  { type: 'circle', color: '#f472b6', opacity: 0.13, size: 70, style: { top: '70%', left: '10%' }, animationName: 'moveCircle2', animationDuration: 28 },
  { type: 'circle', color: '#fbbf24', opacity: 0.12, size: 110, style: { bottom: '20%', right: '15%' }, animationName: 'moveCircle3', animationDuration: 30 },
  { type: 'circle', color: '#0a2259', opacity: 0.10, size: 50, style: { top: '40%', right: '25%' }, animationName: 'moveCircle1', animationDuration: 20 },
  { type: 'circle', color: '#2563eb', opacity: 0.15, size: 100, style: { top: '12%', right: '10%' }, animationName: 'moveCircle2', animationDuration: 26 },
  { type: 'circle', color: '#fbbf24', opacity: 0.13, size: 80, style: { top: '65%', left: '18%' }, animationName: 'moveCircle3', animationDuration: 28 },
  { type: 'circle', color: '#34d399', opacity: 0.12, size: 60, style: { bottom: '15%', right: '12%' }, animationName: 'moveCircle1', animationDuration: 22 },
  { type: 'circle', color: '#0a2259', opacity: 0.10, size: 90, style: { top: '35%', right: '20%' }, animationName: 'moveCircle2', animationDuration: 32 },
  { type: 'circle', color: '#f87171', opacity: 0.14, size: 75, style: { top: '20%', left: '40%' }, animationName: 'moveCircle3', animationDuration: 27 },
  { type: 'circle', color: '#38bdf8', opacity: 0.13, size: 95, style: { top: '55%', left: '60%' }, animationName: 'moveCircle1', animationDuration: 29 },
  { type: 'circle', color: '#facc15', opacity: 0.12, size: 85, style: { bottom: '25%', right: '30%' }, animationName: 'moveCircle2', animationDuration: 31 },
  { type: 'circle', color: '#4ade80', opacity: 0.13, size: 65, style: { top: '75%', left: '50%' }, animationName: 'moveCircle3', animationDuration: 25 },
  { type: 'circle', color: '#818cf8', opacity: 0.14, size: 105, style: { top: '5%', right: '5%' }, animationName: 'moveCircle1', animationDuration: 23 },
  { type: 'circle', color: '#f472b6', opacity: 0.13, size: 70, style: { bottom: '5%', left: '45%' }, animationName: 'moveCircle2', animationDuration: 27 },
  { type: 'circle', color: '#fbbf24', opacity: 0.12, size: 110, style: { top: '80%', right: '10%' }, animationName: 'moveCircle3', animationDuration: 33 },
  { type: 'circle', color: '#0ea5e9', opacity: 0.12, size: 100, style: { top: '50%', left: '80%' }, animationName: 'moveCircle2', animationDuration: 30 },
];
const Home = () => {
    // const [members,setMembers] = useState([]);

    // useEffect(()=>{
    //     fetch('https://quiet-fjord-73452.herokuapp.com/team-member')
    //     .then(res=>res.json())
    //     .then(data=>{setMembers(data.data)
    // //  console.log(data)
    // })
    // },[])
    useEffect(()=>{
        Aos.init({duration:'3000'});
    },[])
    return (
        
        <div className="relative">
          <BackgroundDecor shapes={circleConfigs} />
          <Banner />
          <AboutUs Aos={Aos} />
          <WhatWeOffer />
          <Services Aos={Aos} />
          {/* <ChooseUs /> */}
          {/* <Testimonial /> */}
          {/* {
            members.map(member => <Team member={member} />)
          } */}
          {/* <Team Aos={Aos} /> */}
          {/* <Portfolio /> */}
          <Client Aos={Aos} />
          <Contact />
        </div>
    );
};

export default Home;