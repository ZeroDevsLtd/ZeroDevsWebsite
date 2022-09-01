import React, { useState } from 'react';
import {PortItems} from './Elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Portfolio = (props) => {

  const [items, setItems] = useState(PortItems);

  const filterItem = (categItem) => {
    const updateItem = PortItems.filter(protItem => {
      return protItem.category === categItem;
    });
    setItems(updateItem);
  }

 let buttons = document.querySelectorAll('button');
 buttons.forEach(button =>{
  button.addEventListener('click',function () {
    buttons.forEach(btn=>btn.classList.remove('port'));
    this.classList.add('port');
  })
 })
  
  return (
    <div>
      <section id="portfolio" className="clearfix">
        <div className="container">
          <header className="section-header">
            <h3 className="section-title">Our Portfolio</h3>
          </header>
          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li ><button className='port'  onClick={() => setItems(PortItems)}>All</button></li>
                <li ><button onClick={() => filterItem('app')}>App</button></li>
                <li ><button onClick={() => filterItem('card')}>Card</button></li>
                <li ><button onClick={() => filterItem('web')}>Web</button></li>
              </ul>
            </div>
          </div>
          <div data-aos={props.aos} data-aos-offset={props.aos_offset} className="row portfolio-container">
              {
                items.map(item => {
                  return (
                    <div data-aos='fade-right' className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img src={item.ima} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4><a href="#">{item.name}</a></h4>
                        <p>{item.category}</p>
                        <div>
                          <a href={item.url2} target='_blank' data-lightbox="portfolio" data-title="App 1" className="link-preview" title="Preview"><FontAwesomeIcon className='text-white text-2xl mt-1' icon={faTwitterSquare} /></a>
                          <a href={item.url1} target='_blank' className="link-details" title="More Details"><FontAwesomeIcon className='text-white text-2xl mt-1' icon={faFacebookF} /></a>
                        </div>
                      </div>
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

export default Portfolio;