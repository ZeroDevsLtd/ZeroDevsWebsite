import React, { useEffect, useRef } from 'react';
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
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Duplicate the logos for seamless looping
    const marquee = marqueeRef.current;
    if (marquee && marquee.children.length === clientLogos.length) {
      for (let i = 0; i < clientLogos.length; i++) {
        marquee.appendChild(marquee.children[i].cloneNode(true));
      }
    }
  }, []);

  return (
    <section id="clients" className="py-20 relative overflow-hidden" style={{ background: '#f8f6f3' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-900 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-600 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 
            className="text-4xl md:text-5xl font-bold mb-6 tracking-wide"
            style={{ color: '#0a2259', textTransform: 'uppercase' }}
          >
            {content.client.title}
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading companies worldwide. We've helped businesses of all sizes 
            transform their digital presence and achieve remarkable growth through our 
            innovative solutions and dedicated partnership approach.
          </p>
        </div>

        {/* Marquee Section */}
        <div className="relative w-full overflow-x-hidden py-8">
          <div
            ref={marqueeRef}
            className="flex items-center gap-8 animate-marquee"
            style={{
              width: 'max-content',
              animation: 'marquee 50s linear infinite',
            }}
          >
            {clientLogos.map((logo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-3 shadow-md border border-gray-100 flex items-center justify-center min-w-[100px] h-16 mx-2 group transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <img
                  src={logo}
                  alt={`Client ${idx + 1}`}
                  className="h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4" style={{ color: '#0a2259' }}>
              Ready to Join Our Success Stories?
            </h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how ZeroDevs can help transform your business with our 
              innovative software solutions and dedicated development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="btn-services inline-block"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  padding: "12px 32px",
                  borderRadius: "50px",
                  transition: "0.5s",
                  color: "#fff",
                  textDecoration: "none",
                  border: "2px solid #007bff",
                  background: "#007bff"
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "none";
                  e.target.style.borderColor = "#007bff";
                  e.target.style.color = "#007bff";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "#007bff";
                  e.target.style.borderColor = "#007bff";
                  e.target.style.color = "#fff";
                }}
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Client;