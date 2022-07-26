import React from 'react';
import about1 from '../../Components/images/about-img.svg';
import about2 from '../../Components/images/about-extra-1.svg';
import about3 from '../../Components/images/about-extra-2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoFilm, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faBarChart } from '@fortawesome/free-regular-svg-icons';

const AboutUs = (props) => {
  // console.log(props);
    return (
       <>
       <section id="about">
      <div class="container">

        <header class="section-header">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </header>

        <div class="row about-container" data-aos={props.aos} data-aos-offset={props.aos_offset}>

          <div data-aos="fade-up" class="col-lg-6 content order-lg-1 order-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div class="icon-box wow fadeInUp">
              <div class="icon"><FontAwesomeIcon icon={faShoppingBag} className='text-2xl text-blue-700'></FontAwesomeIcon></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>

            <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
              <div class="icon"><FontAwesomeIcon icon={faPhotoFilm} className='text-2xl text-blue-700'></FontAwesomeIcon></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>

            <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div class="icon"><FontAwesomeIcon icon={faBarChart} className='text-2xl text-blue-700'></FontAwesomeIcon></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>

          </div>

          <div data-aos="fade-up" class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <img src={about1} class="img-fluid w-96 h-96 ml-20 mt-8" alt=""/>
          </div>
        </div>

        <div data-aos={props.aos} data-aos-offset={props.aos_offset} class="row about-extra">
          <div data-aos="fade-up" class="col-lg-6 wow fadeInUp">
            <img src={about2} class="img-fluid w-96 h-96" alt=""/>
          </div>
          <div data-aos="fade-up" class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
            <p>
              Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
            </p>
            <p>
              Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
            </p>
          </div>
        </div>

        <div data-aos={props.aos} data-aos-offset={props.aos_offset} class="row about-extra">
          <div data-aos="fade-up" class="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src={about3} class="img-fluid w-96 h-96 ml-20" alt=""/>
          </div>

          <div data-aos="fade-up" class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
            <div>
            <p>
             Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt. 
            </p>
            <p>
              Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
            </p>
            <p>
              Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
            </p>
            </div>
          </div>
          
        </div>

      </div>
    </section>
</>
    );
};

export default AboutUs;