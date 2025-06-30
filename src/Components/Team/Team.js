import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlus, faLinkedin, faTwitterSquare, faWindows } from '@fortawesome/free-brands-svg-icons';
import TeamDetails from './TeamDetails';
import content from '../../content/websiteContent';

const Team = (props) => {
  // const {name,image} = props.member;
  // console.log(name);
  const [teams, setTeams] = useState([]);


  useEffect(() => {
    fetch('https://quiet-fjord-73452.herokuapp.com/team-member')
      .then(res => res.json())
      .then(data => setTeams(data.data))

  }, []);
  // const {data:teams, isLoading} = useQuery('teams',()=> fetch('http://localhost:5000/team-member').then(res=>res.json()))


  // teams.map(team=>{
  //   if(team ){
  //     // console.log(team.name);
  //     // console.log(team?.email);
  //   }
  // })

  // if(isLoading){
  //   return <Loading></Loading>
  // }
  // console.log(teams);

  return (
    <div>
      <section id="team">
        <div class="container">
          <div class="section-header">
            <h3>{content.team.title}</h3>
            <p>{content.team.description}</p>
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