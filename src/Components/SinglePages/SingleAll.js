import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SingleAboutUs from './SingleAboutUs';
import SingleContactUs from './SingleContactUs';
import SinglePortfolio from './SinglePortfolio';
import SingleTeam from './SingleTeam';

const SingleAll = () => {
    useEffect(()=>{
        Aos.init({duration:'3000'});
    },[])
    return (
        <div>
            <SingleAboutUs Aos={Aos}></SingleAboutUs>
            <SingleContactUs Aos={Aos}></SingleContactUs>
            <SinglePortfolio Aos={Aos}></SinglePortfolio>
            <SingleTeam Aos={Aos}></SingleTeam>
        </div>
    );
};

export default SingleAll;