import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Client = (props) => {

  const [clients, setClients] = useState([]);
  const url = 'http://51.159.105.249:18520/client'
  console.log(clients);

  useEffect(() => {
    // fetch('http://51.159.105.249:18520/client')
    // .then(res => res.json())
    // .then(data => setClients(data))
    // .catch(err=>console.log(err))
  //   var request = new Request(`https://ip:8080/click?url=${url}`, {
  //     method: 'GET',
  //     headers: new Headers({
  //         "Content-Type": "application/json"
  //     }),
  // });
  // fetch(request)
  // .then(res=>res.json())
  // .then(data=>setClients(data))

  // axios.get('http://51.159.105.249:18520/client')
  // .then(res=>setClients(res.data))
  // .catch(err=>{
  //   console.log(err.res);
  // })

  axios.get('http://51.159.105.249:18520/client')
  .then(res=>setClients(res.data))
  .catch( error => { return Promise.reject(error.response); });
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