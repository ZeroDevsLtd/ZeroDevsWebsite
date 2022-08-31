import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlus, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const TeamDetails = (props) => {
    const {name,image,title} = props.team ;
    // console.log(props);
    
    return (
            <div class=" member">
              <img src={image} class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{name}</h4>
                  <span>{title}</span>
                  <div class="social flex place-content-center space-x-3">
                    <Link to=''><FontAwesomeIcon icon={faFacebookF} /></Link>
                    <Link to=''><FontAwesomeIcon icon={faGooglePlus} /></Link>
                    <Link to=''><FontAwesomeIcon icon={faTwitterSquare} /></Link>
                    <Link to=''><FontAwesomeIcon icon={faLinkedin} /></Link>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default TeamDetails;