import React from 'react';
import offer1 from '../images/about-extra-1.svg';
import offer2 from '../images/about-extra-2.svg';
import offer3 from '../images/intro-img.svg';
import offer4 from '../images/about-img.svg';
import content from '../../content/websiteContent';

const offerImages = [offer1, offer2, offer3, offer4, offer1, offer2]; // Only vector SVGs, repeat as needed

const WhatWeOffer = () => {
  return (
    <section id="what-we-offer" className="py-20" style={{ background: '#f8f6f3', color: '#111' }}>
      <div className="container mx-auto px-4 max-w-6xl" style={{ color: '#111' }}>
        <header className="mb-12 text-center" style={{ color: '#111' }}>
          <h3 className="text-4xl font-bold text-gray-900 mb-6 uppercase tracking-wide" style={{ color: '#111' }}>{content.whatWeOffer.title}</h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto" style={{ color: '#111' }}>{content.whatWeOffer.description}</p>
        </header>
        <div className="grid md:grid-cols-2 gap-10">
          {content.whatWeOffer.items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg flex flex-col items-center text-center p-8 hover:shadow-2xl transition" style={{ color: '#111' }}>
              <div className="flex-shrink-0 w-40 h-40 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden mb-6">
                <img src={offerImages[idx]} alt={item.title} className="w-32 h-32 object-contain" />
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
