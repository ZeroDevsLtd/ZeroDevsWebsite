import React, { useState } from 'react';
import PortItems from './Elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlus, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Portfolio = () => {

  const [items, setItems] = useState(PortItems);
  console.log(items);

  const filterItem = (categItem) => {
    const updateItem = PortItems.filter(protItem => {
      return protItem.category === categItem;
    });
    setItems(updateItem);
  }
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
                <li><button onClick={() => setItems(PortItems)}>All</button></li>
                <li><button onClick={() => filterItem('app')}>App</button></li>
                <li><button onClick={() => filterItem('card')}>Card</button></li>
                <li><button onClick={() => filterItem('web')}>Web</button></li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
              {
                items.map(item => {
                  return (
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img src={item.ima} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4><a href="#">{item.name}</a></h4>
                        <p>{item.category}</p>
                        <div>
                          <a href="img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" className="link-preview" title="Preview"><Link to=''><FontAwesomeIcon className='text-white text-2xl mt-1' icon={faTwitterSquare} /></Link></a>
                          <a href="#" className="link-details" title="More Details"><Link to=''><FontAwesomeIcon className='text-white text-2xl mt-1' icon={faFacebookF} /></Link></a>
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