import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: #ffffff;
          border-top: 4px solid #1e3a8a;
          font-family: Arial, sans-serif;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 1.5rem;
        }

        /* Grid Layout */
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
        }

        @media(min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(min-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Brand Section */
        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .footer-brand-icon {
          color: #1e3a8a;
        }

        .footer-brand-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
        }

        .footer-brand-desc {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.6;
        }

        .footer-trusted {
          margin-top: 1.5rem;
          padding: 12px;
          background: #f8fafc;
          border-radius: 10px;
        }

        .footer-trusted-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          color: #1e3a8a;
        }

        .footer-trusted-desc {
          font-size: 0.875rem;
          color: #475569;
        }

        /* Footer Sections */
        .footer-heading {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.25rem;
          color: #1e3a8a;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-list-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: #475569;
          font-size: 0.875rem;
        }

        .footer-icon {
          color: #1e3a8a;
          margin-top: 0.125rem;
        }

        .footer-link {
          color: #475569;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .footer-link:hover {
          color: #1e3a8a;
          transform: translateX(2px);
        }

        /* Bottom Section */
        .footer-bottom {
          border-top: 1px solid #e2e8f0;
          margin-top: 4rem;
          padding-top: 1.5rem;
          text-align: center;
          font-size: 0.875rem;
          color: #64748b;
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-grid">

            <div className="footer-brand">
              <div className="footer-brand-header">
                <ShieldCheck className="footer-brand-icon" size={26} />
                <h3 className="footer-brand-title">CodeVirus Security</h3>
              </div>

              <p className="footer-brand-desc">
                Independent cybersecurity consulting and assurance services
                supporting enterprises, institutions, and digital platforms
                across evolving threat landscapes.
              </p>

              <div className="footer-trusted">
                <span className="footer-trusted-label">Trusted Industry Partner</span>
                <p className="footer-trusted-desc">GoodFirms – Cybersecurity Services</p>
              </div>
            </div>

            <div className="footer-contact">
              <h4 className="footer-heading">Contact Information</h4>

              <ul className="footer-list">
                <li className="footer-list-item">
                  <MapPin size={18} className="footer-icon" />
                  <span>Lucknow, India</span>
                </li>

                <li className="footer-list-item">
                  <Mail size={18} className="footer-icon" />
                  <a href="mailto:services@codevirussec.in" className="footer-link">
                    services@codevirussec.in
                  </a>
                </li>

                <li className="footer-list-item">
                  <Mail size={18} className="footer-icon" />
                  <a href="mailto:contact@codevirussec.in" className="footer-link">
                    contact@codevirussec.in
                  </a>
                </li>

                <li className="footer-list-item">
                  <Phone size={18} className="footer-icon" />
                  <span>+91 9918103909</span>
                </li>
              </ul>
            </div>

            <div className="footer-company">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li><Link to="/about" className="footer-link">About CodeVirus</Link></li>
                <li><Link to="/faq" className="footer-link">FAQs</Link></li>
                <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
                <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
              </ul>
            </div>

            <div className="footer-services">
              <h4 className="footer-heading">Cybersecurity Services</h4>
              <ul className="footer-list">
                <li>Vulnerability Assessment & Penetration Testing</li>
                <li>Cloud Security</li>
                <li>Data Protection & Privacy</li>
                <li>IT & System Security Audits</li>
                <li>Aadhaar Security Audit</li>
                <li>Digital Forensics</li>
                <li>IoT & Network Security</li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <p>© 2018 CodeVirus Security. All Rights Reserved.</p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
