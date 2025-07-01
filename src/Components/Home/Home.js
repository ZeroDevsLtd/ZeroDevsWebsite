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
        
        <div>
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