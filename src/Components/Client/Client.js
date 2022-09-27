import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Client = (props) => {

  const [clients, setClients] = useState([]);
  console.log(clients);

  useEffect(() => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://51.159.105.249:18520/client", requestOptions)
      .then(response => response.json())
      .then(result => setClients(result))
      .catch(error => console.log('error', error));

 }, [])
  return (
    <div>
      <section id="clients" class="section-bg">

        <div class="container">

          <div class="section-header">
            <h3>Our Clients</h3>
            <p>Our clients are dispersed all over the globe. We are resolute in providing you quality service & maintaining the standard doubtlessly .</p>
          </div>

          <div data-aos={props.aos} data-aos-offset={props.aos_offset} class="row ">

            {
              clients.map(client => {
                return (
                  <div data-aos="fade-left" class="col-lg-3 col-md-4 col-xs-6 mt-4">
                    <div class="client-logo">
                      <img src={client.image} class="img-fluid" alt="" />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Client;