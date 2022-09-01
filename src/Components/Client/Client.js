import React from 'react';
import client1 from '../../Components/images/clients/client-1.png'
import client2 from '../../Components/images/clients/client-2.png'
import client3 from '../../Components/images/clients/client-3.png'
import client4 from '../../Components/images/clients/client-4.png'
import client5 from '../../Components/images/clients/client-5.png'
import client6 from '../../Components/images/clients/client-6.png'
import client7 from '../../Components/images/clients/client-7.png'
import client8 from '../../Components/images/clients/client-8.png'

const Client = (props) => {
    return (
        <div>
            <section id="clients" class="section-bg">

<div class="container">

  <div class="section-header">
    <h3>Our Clients</h3>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque dere santome nida.</p>
  </div>

  <div data-aos={props.aos} data-aos-offset={props.aos_offset} class="row no-gutters clearfix wow fadeInUp">

    <div data-aos="fade-up" class="col-lg-3 col-md-4 col-xs-6 mt-4">
      <div class="client-logo">
        <img src={client1} class="img-fluid" alt=""/>
      </div>
    </div>
    
    <div data-aos="fade-right" class="col-lg-3 col-md-4 col-xs-6 mt-4">
      <div class="client-logo">
        <img src={client2} class="img-fluid" alt=""/>
      </div>
    </div>
  
    <div data-aos="fade-left" class="col-lg-3 col-md-4 col-xs-6 mt-4">
      <div class="client-logo">
        <img src={client3} class="img-fluid" alt=""/>
      </div>
    </div>
    
    <div data-aos="fade-up" class="col-lg-3 col-md-4 col-xs-6 mt-4">
      <div class="client-logo">
        <img src={client4} class="img-fluid" alt=""/>
      </div>
    </div>
    
    <div data-aos="fade-down" class="col-lg-3 col-md-4 col-xs-6 mt-4">
      <div class="client-logo">
        <img src={client5} class="img-fluid" alt=""/>
      </div>
    </div>
  
    <div data-aos="fade-left" class="col-lg-3 col-md-4 col-xs-6 mt-4">
      <div class="client-logo">
        <img src={client6} class="img-fluid" alt=""/>
      </div>
    </div>
    
    <div data-aos="fade-right" class="col-lg-3 col-md-4 col-xs-6 mt-4">
      <div class="client-logo">
        <img src={client7} class="img-fluid" alt=""/>
      </div>
    </div>
    
    <div data-aos="fade-up" class="col-lg-3 col-md-4 col-xs-6 mt-4">
      <div class="client-logo">
        <img src={client8} class="img-fluid" alt=""/>
      </div>
    </div>

  </div>

</div>

</section>
        </div>
    );
};

export default Client;