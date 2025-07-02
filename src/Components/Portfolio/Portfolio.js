import React from 'react';
import app1 from '../../Components/images/portfolio/app1.jpg'
import app2 from '../../Components/images/portfolio/app2.jpg'
import app3 from '../../Components/images/portfolio/app3.jpg'
import card1 from '../../Components/images/portfolio/card1.jpg'
import card2 from '../../Components/images/portfolio/card2.jpg'
import card3 from '../../Components/images/portfolio/card3.jpg'
import web1 from '../../Components/images/portfolio/web1.jpg'
import web2 from '../../Components/images/portfolio/web2.jpg'
import web3 from '../../Components/images/portfolio/web3.jpg'

const Portfolio = () => {
    return (
        <div>
            <section id="portfolio" className="clearfix">
        <div className="container">
          <header className="section-header" style={{ color: '#0a2259' }}>
            <h3 className="section-title">Our Portfolio</h3>
          </header>
          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={app1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4><a href="#">App 1</a></h4>
                  <p>App</p>
                  <div>
                    <a href="img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" className="link-preview" title="Preview"><i className="ion ion-eye" /></a>
                    <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
              <div className="portfolio-wrap">
                <img src={web3} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4><a href="#">Web 3</a></h4>
                  <p>Web</p>
                  <div>
                    <a href="img/portfolio/web3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i className="ion ion-eye" /></a>
                    <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
              <div className="portfolio-wrap">
                <img src={app2} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4><a href="#">App 2</a></h4>
                  <p>App</p>
                  <div>
                    <a href="img/portfolio/app2.jpg" className="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i className="ion ion-eye" /></a>
                    <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={card2} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4><a href="#">Card 2</a></h4>
                  <p>Card</p>
                  <div>
                    <a href="img/portfolio/card2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i className="ion ion-eye" /></a>
                    <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
              <div className="portfolio-wrap">
                <img src={web2} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4><a href="#">Web 2</a></h4>
                  <p>Web</p>
                  <div>
                    <a href="img/portfolio/web2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i className="ion ion-eye" /></a>
                    <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
              <div className="portfolio-wrap">
                <img src={app3} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4><a href="#">App 3</a></h4>
                  <p>App</p>
                  <div>
                    <a href="img/portfolio/app3.jpg" className="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i className="ion ion-eye" /></a>
                    <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={card1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4><a href="#">Card 1</a></h4>
                  <p>Card</p>
                  <div>
                    <a href="img/portfolio/card1.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i className="ion ion-eye" /></a>
                    <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
              <div className="portfolio-wrap">
                <img src={card3} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4><a href="#">Card 3</a></h4>
                  <p>Card</p>
                  <div>
                    <a href="img/portfolio/card3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i className="ion ion-eye" /></a>
                    <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s">
              <div className="portfolio-wrap">
                <img src={web1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4><a href="#">Web 1</a></h4>
                  <p>Web</p>
                  <div>
                    <a href="img/portfolio/web1.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i className="ion ion-eye" /></a>
                    <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Portfolio;