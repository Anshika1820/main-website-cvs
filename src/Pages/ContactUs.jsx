import React from "react";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

const ContactUs = () => {
  return (
    <>
      <style>{`
        .contact-section {
          padding: 6rem 1.5rem;
          background: linear-gradient(to bottom, #ffffff, #f4f7fc);
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .contact-title {
          font-size: 2rem;
          font-weight: 700;
          color: #0b2a5b;
          margin-bottom: 1rem;
        }

        .contact-subtitle {
          font-size: 1rem;
          color: #475569;
          max-width: 48rem;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-main {
          background-color: #ffffff;
          border: 1px solid #e6ecf5;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 8px 24px rgba(11,42,91,0.06);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: flex-start;
        }

        @media(min-width: 1024px) {
          .contact-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .contact-info-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .contact-icon {
          color: #0b2a5b;
          margin-top: 0.25rem;
        }

        .contact-info-title {
          font-weight: 600;
          color: #0b2a5b;
          margin-bottom: 0.25rem;
        }

        .contact-info-text {
          color: #475569;
          font-size: 0.875rem;
        }

        .contact-link {
          color: #0b2a5b;
          font-size: 0.875rem;
          text-decoration: none;
          font-weight: 600;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        .contact-why {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .why-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0b2a5b;
        }

        .why-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .why-icon {
          color: #0b2a5b;
          margin-top: 0.25rem;
        }

        .why-item-title {
          font-weight: 600;
          font-size: 0.875rem;
          color: #0b2a5b;
        }

        .why-item-text {
          font-size: 0.875rem;
          color: #475569;
          line-height: 1.5;
        }

        .contact-form-container {
          background-color: #f8fbff;
          border: 1px solid #e6ecf5;
          border-radius: 10px;
          padding: 1.5rem;
        }

        .form-title {
          font-size: 1rem;
          font-weight: 600;
          color: #0b2a5b;
          margin-bottom: 1rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          border: 1px solid #cbd5e1;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          border-radius: 6px;
          outline: none;
          transition: 0.2s;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #0b2a5b;
          box-shadow: 0 0 0 2px rgba(11,42,91,0.08);
        }

        .form-textarea {
          resize: none;
        }

        .form-button {
          background-color: #0b2a5b;
          color: #ffffff;
          padding: 0.55rem 0.75rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: 0.25s;
        }

        .form-button:hover {
          background-color: #163d82;
        }
      `}</style>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">
              Connect with CodeVirus Security
            </h2>
            <p className="contact-subtitle">
              We help organizations secure critical infrastructure, protect
              sensitive data, and manage cyber risk through compliant,
              intelligence-driven cybersecurity services.
            </p>
          </div>

          <div className="contact-main">
            <div className="contact-grid">
              {/* LEFT */}
              <div className="contact-info">
                <div className="contact-info-item">
                  <MapPin size={22} className="contact-icon" />
                  <div>
                    <h4 className="contact-info-title">Office Location</h4>
                    <p className="contact-info-text">Lucknow, India</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Mail size={22} className="contact-icon" />
                  <div>
                    <h4 className="contact-info-title">Business Email</h4>
                    <a href="mailto:services@codevirussec.in" className="contact-link">
                      services@codevirussec.in
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Phone size={22} className="contact-icon" />
                  <div>
                    <h4 className="contact-info-title">Contact Number</h4>
                    <p className="contact-info-text">+91 9918103909</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Clock size={22} className="contact-icon" />
                  <div>
                    <h4 className="contact-info-title">Business Hours</h4>
                    <p className="contact-info-text">Mon – Fri | 10:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* MIDDLE */}
              <div className="contact-why">
                <h3 className="why-title">Why Choose Our Cybersecurity Services?</h3>

                <div className="why-item">
                  <ShieldCheck size={20} className="why-icon" />
                  <div>
                    <p className="why-item-title">24/7 Monitoring</p>
                    <p className="why-item-text">Round-the-clock security monitoring and threat detection.</p>
                  </div>
                </div>

                <div className="why-item">
                  <ShieldCheck size={20} className="why-icon" />
                  <div>
                    <p className="why-item-title">Expert Team</p>
                    <p className="why-item-text">Certified cybersecurity professionals with years of experience.</p>
                  </div>
                </div>

                <div className="why-item">
                  <ShieldCheck size={20} className="why-icon" />
                  <div>
                    <p className="why-item-title">Advanced Technology</p>
                    <p className="why-item-text">State-of-the-art tools and cutting-edge security solutions.</p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="contact-form-container">
                <h3 className="form-title">Request a Security Consultation</h3>

                <form className="contact-form">
                  <input type="text" placeholder="Full Name" required className="form-input" />
                  <input type="email" placeholder="Email Address" required className="form-input" />
                  <input type="tel" placeholder="Phone Number" required className="form-input" />
                  <textarea rows="3" placeholder="Briefly describe your requirement" className="form-textarea"></textarea>
                  <button type="submit" className="form-button">Submit Inquiry</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
