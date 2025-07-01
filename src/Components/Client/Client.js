import React from 'react';
import client1 from '../../Components/images/clients/client-1.png';
import client2 from '../../Components/images/clients/client-2.png';
import client3 from '../../Components/images/clients/client-3.png';
import client4 from '../../Components/images/clients/client-4.png';
import client5 from '../../Components/images/clients/client-5.png';
import client6 from '../../Components/images/clients/client-6.png';
import client7 from '../../Components/images/clients/client-7.png';
import client8 from '../../Components/images/clients/client-8.png';
import content from '../../content/websiteContent';

const clientLogos = [client1, client2, client3, client4, client5, client6, client7, client8];

const Client = () => {
  return (
    <section id="clients" className="py-8" style={{ background: '#f8f6f3' }}>
      <div className="container mx-auto px-4 max-w-3xl">
        <header className="mb-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">{content.client.title}</h3>
        </header>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clientLogos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center p-2">
              <img src={logo} alt={`Client ${idx + 1}`} className="w-28 h-28 rounded-full object-cover border-4 border-blue-900 shadow-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;