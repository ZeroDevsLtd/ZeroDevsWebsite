import React from 'react';
import content from '../../content/websiteContent';

// Example icons for stats (replace with your own SVGs or icon library as needed)
const statIcons = [
  <svg key="prod" className="w-8 h-8 text-blue-700 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7"/><path d="M16 3v4M8 3v4M4 11h16"/></svg>,
  <svg key="users" className="w-8 h-8 text-blue-700 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87"/><path d="M9 20H4v-2a4 4 0 013-3.87"/><circle cx="12" cy="7" r="4"/><path d="M16 11a4 4 0 01-8 0"/></svg>,
  <svg key="globe" className="w-8 h-8 text-blue-700 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>,
  <svg key="years" className="w-8 h-8 text-blue-700 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
];

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="products-hero py-20 text-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/src/Components/images/intro-bg.png')] bg-cover bg-center pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">Our Products</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 font-medium">{content.products.description}</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="products-stats py-12 bg-white flex flex-wrap justify-center gap-10 border-b border-blue-100">
        {content.products.stats && content.products.stats.map((stat, idx) => (
          <div key={idx} className="stat-card bg-blue-50 rounded-2xl shadow-sm p-8 w-56 text-center hover:shadow-lg transition">
            {statIcons[idx]}
            <div className="text-3xl font-extrabold text-blue-900 mb-1">{stat.value}</div>
            <div className="text-gray-600 text-base font-medium tracking-wide uppercase">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Products List */}
      <section className="products-list py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {content.products.items.map((product, idx) => (
              <div key={idx} className="product-card bg-white rounded-3xl shadow-xl flex flex-col items-start text-left p-10 border border-blue-100 hover:shadow-2xl transition group relative overflow-hidden">
                <span className="absolute top-6 right-6 bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow group-hover:bg-blue-700 group-hover:text-white transition">Featured</span>
                <h2 className="text-2xl font-bold mb-2 text-blue-900 group-hover:text-blue-700 transition">{product.name}</h2>
                <a href={product.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm mb-3 break-all">{product.url.replace('https://', '')}</a>
                <p className="text-gray-700 text-base mb-5 leading-relaxed">{product.summary}</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
                  {product.features && product.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                {/* If you add images, you can display them here */}
                {/* {product.image && <img src={product.image} alt={product.name} className="w-24 h-24 object-contain mb-4" />} */}
                <a href={product.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-auto px-7 py-2 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-700 transition shadow">Visit Product</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta py-20 text-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Ready to Start a Project?</h2>
        <p className="text-xl text-blue-100 mb-8 font-medium">Let’s collaborate and build something amazing together. Reach out to us to get started!</p>
        <a href="/contact" className="inline-block px-10 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-100 hover:text-blue-800 transition shadow-lg">Contact Us</a>
      </section>
    </div>
  );
};

export default Products; 