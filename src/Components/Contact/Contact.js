import React, { useState } from 'react';
import content from '../../content/websiteContent';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the form data
  };

  return (
    <section id="contact" className="py-20 bg-[#f8f6f3]">
      <div className="container mx-auto px-4 max-w-2xl">
        <header className="mb-10 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">{content.contact.title}</h3>
          <p className="text-gray-600 mb-6">We'd love to hear from you! Fill out the form and our team will get back to you soon.</p>
        </header>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                className="form-input flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                className="form-input flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              className="form-input w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              className="form-textarea w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
              rows={5}
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
              >
                Send Message
              </button>
              <a
                href="https://calendly.com/zerodevs/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition text-center"
              >
                Schedule a Free 30-Minute Session
              </a>
            </div>
            {submitted && (
              <div className="text-green-600 text-center font-medium mt-4">Your message has been sent. Thank you!</div>
            )}
          </form>
          <div className="mt-10 text-center text-gray-500 text-sm">
            <div>{content.contact.address}</div>
            <div className="mt-1">Phone: <a href={`tel:${content.contact.phone}`} className="text-blue-700">{content.contact.phone}</a></div>
            <div>Email: <a href={`mailto:${content.contact.email}`} className="text-blue-700">{content.contact.email}</a></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;