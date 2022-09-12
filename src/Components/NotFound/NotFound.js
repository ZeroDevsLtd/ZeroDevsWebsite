import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
        <div class="page-wrap d-flex flex-row align-items-center h-screen w-full " >
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center ">
            <h1>Oops!</h1>
                <span class="display-1 d-block ">404</span>
                <div class="mb-4 lead">The page you are looking for was not found.</div>
                <Link to='/' class="btn btn-link">Back to Home</Link>
            </div>
        </div>
    </div>
</div>
</>

    );
};

export default NotFound;