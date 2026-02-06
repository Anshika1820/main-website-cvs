import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ContactUs from "./ContactUs";

const ServiceBlock = ({ title, description, points }) => (
  <div className="service-block">
    <h3 className="service-block-title">{title}</h3>
    <p className="service-block-desc">{description}</p>
    {points && (
      <ul className="service-block-points">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    )}
  </div>
);

const ServicesDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
        .services-details-container {
          background: #ffffff;
          font-family: Inter, system-ui, sans-serif;
        }

        /* Page Header */
        .page-header {
          background: linear-gradient(135deg, #0f172a, #1e3a8a);
          padding: 3.5rem 1.5rem;
          color: white;
        }

        .page-header-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .page-subtitle {
          font-size: 0.75rem;
          font-weight: 600;
          color: #bfdbfe;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .page-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0.75rem 0 1rem 0;
          color: #ffffff;
          line-height: 1.2;
        }

        .page-description {
          font-size: 1rem;
          color: #e2e8f0;
          max-width: 48rem;
        }

        /* Services Content */
        .services-content {
          padding: 3.5rem 1.5rem;
          background: #f8fafc;
        }

        .services-content-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* Service Block */
        .service-block {
          border-left: 4px solid #1e3a8a;
          padding-left: 1.5rem;
          padding-top: 2rem;
          padding-bottom: 2rem;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
          transition: 0.25s ease;
        }

        .service-block:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
        }

        .service-block-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.75rem;
        }

        .service-block-desc {
          font-size: 1rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          max-width: 64rem;
        }

        .service-block-points {
          list-style-type: disc;
          padding-left: 1.25rem;
          color: #475569;
        }

        .service-block-points li {
          margin-bottom: 0.5rem;
        }

        /* Sticky Contact Button */
        .contact-button-wrapper {
          position: sticky;
          bottom: 1.5rem;
          display: flex;
          justify-content: flex-end;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem 2rem;
        }

        .contact-button {
          background: linear-gradient(135deg, #1e3a8a, #1d4ed8);
          color: #ffffff;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          box-shadow: 0 6px 18px rgba(30, 58, 138, 0.3);
          cursor: pointer;
          transition: 0.3s;
          text-decoration: none;
        }

        .contact-button:hover {
          background: #1e40af;
          transform: translateY(-2px);
        }
        `}
      </style>

      <div className="services-details-container">
        {/* Page Header */}
        <section className="page-header">
          <div className="page-header-inner">
            <span className="page-subtitle">Our Services</span>
            <h1 className="page-title">
              Enterprise Cybersecurity Services & Capabilities
            </h1>
            <p className="page-description">
              Structured, compliant, and operationally mature cybersecurity
              services supporting enterprise security operations and
              regulatory requirements.
            </p>
          </div>
        </section>

        {/* Services Content */}
        <section className="services-content">
          <div className="services-content-inner">
            {/* Your ServiceBlock components remain exactly unchanged */}
          </div>
        </section>

        <div className="contact-button-wrapper">
          <Link to="/contactus" className="contact-button">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServicesDetails;
