import React from 'react';
import { Link } from 'react-router-dom';

const Apply = () => {
    return (
            <div class="jumbotron jumbotron-fluid h-screen bg-black">
                <div class="container">
                    <div className='p-14 mt-12 text-white'>
                        <p className='mb-5'>
                            <span className='text-7xl'>Be a Part of Our</span> <br />
                            <span className='text-7xl'> Incredible Team</span>
                        </p>
                        <p class="lead">Being a great place to work is the difference between being a good company and a great company. We strongly believe that our working culture will be one of the key highlights of your life.</p>
                        <p class="lead mb-5">Here's why we think it's so incredible.</p>
                        <Link to='/contact'><button className="btn btn-primary">Apply the Jobs</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default Apply;