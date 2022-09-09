import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Client = (props) => {

  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/client')
      .then(res => res.json())
      .then(data => setClients(data))
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