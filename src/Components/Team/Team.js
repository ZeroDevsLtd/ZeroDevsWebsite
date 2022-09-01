import React, { useEffect, useState } from 'react';
import TeamDetails from './TeamDetails';

const Team = (props) => {
  
  const [teams, setTeams] = useState([]);


  useEffect(() => {
    fetch('https://quiet-fjord-73452.herokuapp.com/team-member')
      .then(res => res.json())
      .then(data => setTeams(data.data))

  }, []);

  return (
    <div>
      <section id="team">
        <div class="container">
          <div class="section-header">
            <h3>Team</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
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