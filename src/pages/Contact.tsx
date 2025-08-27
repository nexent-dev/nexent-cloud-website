import React from 'react'
import './Contact.css'

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for support, sales inquiries, or partnerships.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Sales</h3>
              <p>Ready to get started? Our sales team is here to help.</p>
              <a href="mailto:sales@nexent.dev">sales@nexent.dev</a>
            </div>
            
            <div className="contact-item">
              <h3>Support</h3>
              <p>Need technical assistance? Our support team is available 24/7.</p>
              <a href="mailto:support@nexent.dev">support@nexent.dev</a>
            </div>
            
            <div className="contact-item">
              <h3>Partnerships</h3>
              <p>Interested in partnering with us? Let's discuss opportunities.</p>
              <a href="mailto:partnerships@nexent.dev">partnerships@nexent.dev</a>
            </div>
          </div>
          
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a topic</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
