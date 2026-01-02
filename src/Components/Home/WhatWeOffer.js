import React from 'react';
import content from '../../content/websiteContent';
import Lottie from 'lottie-react';

const lottieFiles = [
  require('./Business team.json'), // Qualified Engineers
  require('./Web Design Illustration.json'), // Dedicated Team
  require('./Man and robot with computers sitting together in workplace.json'), // Collaborative Process
  require('./Business_team.json'), // Continuous Supervision
  require('./search for employee.json'), // Global Talent Hiring
  require('./job hunt concept.json'), // SaaS Product Development
];

const WhatWeOffer = () => {
  return (
    <section id="what-we-offer" className="py-20" style={{ background: '#f8f6f3', color: '#111' }}>
      <div className="container mx-auto px-4 max-w-6xl" style={{ color: '#111' }}>
        <header className="section-header" style={{ color: '#0a2259' }}>
          <h3 style={{ color: '#0a2259', textTransform: 'uppercase', fontWeight: 700, fontSize: 36 }}>{content.whatWeOffer.title}</h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto" style={{ color: '#111' }}>{content.whatWeOffer.description}</p>
        </header>
        <div className="grid md:grid-cols-2 gap-10">
          {content.whatWeOffer.items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg flex flex-col items-center text-center p-8 hover:shadow-2xl transition" style={{ color: '#111' }}>
              <div className="flex-shrink-0 w-40 h-40 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden mb-6">
                <Lottie
                  animationData={lottieFiles[idx]}
                  loop
                  autoplay
                  style={{ width: '100%', maxWidth: '160px', height: 'auto', minHeight: '120px' }}
                />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 max-w-md mx-auto" style={{ color: '#111' }}>{item.title}</h4>
              <p className="text-gray-700 text-base max-w-md mx-auto" style={{ color: '#111' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
