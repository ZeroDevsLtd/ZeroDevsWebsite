import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlus, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Hero from '../Sheare/Hero';
import { useQuery } from 'react-query';
import Loading from '../Sheare/Loading';

const SingleTeam = (props) => {

  const { data: teams, isLoading } = useQuery('teamsService', () => fetch('//51.159.105.249:18520/team-member').then(res => res.json()))

 
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <Hero></Hero>
      <section id="team">
        <div class="container">
          <div class="section-header">
            <h3>Team</h3>
            <p>Meet our heroes who run this immensely creative and innovative group of people and
              Make the magic happen .
            </p>
          </div>

          <div data-aos={props.aos} data-aos-offset={props.aos_offset} class="row">

            <div data-aos="fade-up" class="columns-2 lg:columns-4">
              {teams.data.map(team => {
                return (
                  <div class=" member">
                    <img src={team.image} class="img-fluid" alt="" />
                    <div class="member-info">
                      <div class="member-info-content">
                        <h4>{team.name}</h4>
                        <span>{team.title}</span>
                        <div class="social flex place-content-center space-x-3">
                          <Link to=''><FontAwesomeIcon icon={faFacebookF} /></Link>
                          <Link to=''><FontAwesomeIcon icon={faGooglePlus} /></Link>
                          <Link to=''><FontAwesomeIcon icon={faTwitterSquare} /></Link>
                          <Link to=''><FontAwesomeIcon icon={faLinkedin} /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleTeam;