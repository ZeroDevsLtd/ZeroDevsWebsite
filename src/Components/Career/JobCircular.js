import React from 'react';
import { Link } from 'react-router-dom';
import './Career.css';

const JobCircular = () => {
    const scroll = () => {
        window.scrollTo(0, 0);
      }

    return (
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 bg-blue-300'>
            <div className='text-center text-4xl p-4'>
                Full Stack Developer
            </div>
            <div className='max-w-md p-3 text-xl'>
                If you are passionate about well-conceived user experiences and beautifully crafted products and want to join the best professionals in creating them - this opportunity is perfect for you! As a product designer, you will be involved in the core process of creating our great products. <br />
                <p onClick={scroll} className='applyPara'> <Link className='apply' to={`/job`}>See details and apply</Link></p>
            </div>
        </div>
    );
};

export default JobCircular;