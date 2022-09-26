import React, { useEffect, useState } from 'react';
import TeamDetails from './TeamDetails';
import axios from 'axios';

const Team = (props) => {

  const [teams, setTeams] = useState([]);
console.log(teams);

  useEffect(() => {
    // fetch('//51.159.105.249:18520/team-member')
    // .then(res => res.json())
    // .then(data => setTeams(data.data))
    // .catch(err=>console.log(err))

    // axios.get('http://51.159.105.249:18520/team-member')
    // .then(res=>setTeams(res.data.data))
    // .catch(err=>{
    //   console.log(err.res);
    // })

    axios.get('http://51.159.105.249:18520/team-member')
    .then(res=>setTeams(res.data.data))
    .catch( error => { return Promise.reject(error.response); });

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
        </div>
      </section>
    </div>
  );
};

export default Team;