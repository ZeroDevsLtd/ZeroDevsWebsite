import React, { useEffect, useState } from 'react';
import TeamDetails from './TeamDetails';
import axios from 'axios';
import api from '../BaseUrl/BaseUrl';

const Team = (props) => {

  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');
console.log(teams);

  useEffect(() => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://51.159.105.249:18520/team-member", requestOptions)
      .then(response => response.json())
      .then(result => setTeams(result.data))
      .catch(error => setError('This section is under construction'));

  }, []);

  return (
    <div>
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
              {teams.map(team => <TeamDetails team={team}></TeamDetails>)}
            </div>
          </div>
          <p className='error'>{error}</p>
        </div>
      </section>
    </div>
  );
};

export default Team;