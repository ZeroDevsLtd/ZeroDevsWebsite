import React, { useState } from 'react';
import content from '../../content/websiteContent';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSubmitted(false);
    try {
      const response = await fetch('https://formspree.io/f/mdkdnwqz', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20" style={{ background: '#f8f6f3' }}>
      <div className="container mx-auto px-4 max-w-2xl">
        <header className="section-header" style={{ color: '#0a2259' }}>
          <h3 style={{ color: '#0a2259', textTransform: 'uppercase', fontWeight: 700, fontSize: 36 }}>{content.contact.title}</h3>
          <p className="text-gray-600 mb-6">We'd love to hear from you! Fill out the form and our team will get back to you soon.</p>
        </header>
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                className="form-input flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white text-gray-900"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                className="form-input flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white text-gray-900"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <input
              type="text"
              name="subject"
              className="form-input w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white text-gray-900"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              className="form-textarea w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white text-gray-900"
              rows={5}
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="btn-services"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  display: "inline-block",
                  padding: "10px 32px",
                  borderRadius: "50px",
                  transition: "0.5s",
                  margin: "0 20px 20px 0",
                  color: "#fff",
                  textDecoration: "none",
                  border: "2px solid #007bff",
                  background: "#007bff"
                }}
                disabled={loading}
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
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {submitted && (
              <div className="text-green-600 text-center font-medium mt-4">Thank you for reaching out! We’ve received your message and will get back to you soon.</div>
            )}
            {error && (
              <div className="text-red-600 text-center font-medium mt-4">{error}</div>
            )}
          </form>
          <div className="mt-10 text-center text-gray-500 text-sm">
            <div>{content.contact.address.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}</div>
            <div className="mt-1">Phone: <a href={`tel:${content.contact.phone}`} className="text-blue-900">{content.contact.phone}</a></div>
            <div>Email: <a href={`mailto:${content.contact.email}`} className="text-blue-900">{content.contact.email}</a></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;