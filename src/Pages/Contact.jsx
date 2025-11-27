import React, { useState } from 'react';
import './Contact.css'; // Externalize styles if needed (optional)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We've received your message and will contact you at ${formData.email} shortly.`);
    setFormData({ name: '', email: '', phone: '', childAge: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-grid">
        {/* Contact Form */}
        <div className="contact-form-container">
          <h2 className="form-title">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Parent's Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-control"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-control"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="+1 (___) ___-____"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="childAge">Child's Age</label>
              <select
                id="childAge"
                name="childAge"
                className="form-control"
                value={formData.childAge}
                onChange={handleChange}
              >
                <option value="">Select age range</option>
                <option value="1-2">1-2 years</option>
                <option value="2-3">2-3 years</option>
                <option value="3-4">3-4 years</option>
                <option value="4-5">4-5 years</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="form-control"
                placeholder="Tell us about your inquiry..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="info-section">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256751054!2d-73.98811742403593!3d40.74844097138892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1719391234567!5m2!1sen!2sus"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </div>

          {/* Location Card */}
          <div className="info-card">
            <div className="info-card-header">
              <div className="info-card-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="info-card-title">Our Preschool</h3>
            </div>
            <div className="info-card-content">
              <p>
                123 Learning Lane<br />
                Playville, PV 12345<br />
                United States
              </p>
              <p><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Get directions →</a></p>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="info-card">
            <div className="info-card-header">
              <div className="info-card-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="info-card-title">Contact Info</h3>
            </div>
            <div className="info-card-content">
              <p><strong>Email:</strong> <a href="mailto:hello@happytots.com">hello@happytots.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+11234567890">(123) 456-7890</a></p>
              <p><strong>Emergency:</strong> <a href="tel:+11234567891">(123) 456-7891</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
