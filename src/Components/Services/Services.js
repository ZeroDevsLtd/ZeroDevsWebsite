import React from 'react';
import Lottie from 'lottie-react';
import content from '../../content/websiteContent';

const lottieFiles = [
  require('../Home/Business team.json'), // Custom Software Development
  require('../Home/Web Design Illustration.json'), // Web Application Development
  require('../Home/Man and robot with computers sitting together in workplace.json'), // Mobile Application Development
  require('../Home/Business_team.json'), // Quality Assurance & Testing
  require('../Home/search for employee.json'), // Global Talent Hiring
  require('../Home/job hunt concept.json'), // SaaS Product Development
];

const Services = (props) => {
  return (
    <section id="services" className="py-20" style={{ background: '#f8f6f3' }}>
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wide" style={{ color: '#0a2259', textTransform: 'uppercase', fontWeight: 700, fontSize: 36 }}>{content.services.title}</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">{content.services.description}</p>
        </header>
        <div className="space-y-16 mx-8 md:mx-16 lg:mx-24">
          {content.services.offerings.map((service, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
                <Lottie
                  animationData={lottieFiles[idx]}
                  loop
                  autoplay
                  style={{ width: '100%', maxWidth: '320px', height: 'auto', minHeight: '224px' }}
                />
              </div>
              <div className="md:w-1/2">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h4>
                <p className="text-gray-700 text-base">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;