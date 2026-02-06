import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ContactUs from "./ContactUs";
import ServicesDetails from "./ServicesDetails";

const services = [
  {
    title: "Cybersecurity Operations Center (CSOC)",
    desc: "Enterprise-grade 24/7 monitoring, threat detection, and incident response operations.",
  },
  {
    title: "Incident Response & Management",
    desc: "Rapid containment, investigation, and recovery from cybersecurity incidents.",
  },
  {
    title: "Incident Response Plans & Procedures",
    desc: "Structured response playbooks aligned with regulatory and operational needs.",
  },
  {
    title: "Threat Intelligence Integration",
    desc: "Actionable intelligence integration to enhance detection and response.",
  },
  {
    title: "Role of Security Analysts in a CSOC",
    desc: "Definition of Tier 1, Tier 2, and Tier 3 analyst roles and workflows.",
  },
  {
    title: "CSOC Staffing & Talent Retention",
    desc: "Advisory services to address analyst burnout and talent challenges.",
  },
  {
    title: "Aadhaar Authentication & eKYC Integration",
    desc: "UIDAI-compliant Aadhaar authentication and eKYC integration services.",
  },
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    desc: "Identification and exploitation of security vulnerabilities across environments.",
  },
  {
    title: "Cloud Security",
    desc: "Security architecture and protection for AWS, Azure, and GCP.",
  },
  {
    title: "Application Security",
    desc: "Secure SDLC, code reviews, and application security testing.",
  },
  {
    title: "Network Implementation",
    desc: "Design and deployment of secure enterprise network infrastructure.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    document
      .getElementById("contact-us")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <style>{`
  .services-container {
    background-color: #f8fafc;
    font-family: Arial, sans-serif;
  }

  .hero-section {
    background: linear-gradient(135deg, #ffffff, #f1f5f9);
    padding: 7rem 1.5rem;
  }

  .hero-subtitle {
    color: #0b2a5b;
  }

  .hero-title {
    color: #0b1c3f;
  }

  .hero-description {
    color: #475569;
  }

  .hero-button {
    margin-top: 2rem;
    background-color: #0b2a5b;
    color: white;
    padding: 0.75rem 1.75rem;
    border-radius: 0.375rem;
    font-weight: 600;
    box-shadow: 0 6px 14px rgba(11,42,91,0.15);
    cursor: pointer;
    transition: all 0.3s;
  }

  .hero-button:hover {
    background-color: #163d82;
  }

  /* SERVICES SECTION */
  .services-section {
    padding: 6rem 1.5rem;
    background: linear-gradient(to bottom, #ffffff, #f1f5f9);
    position: relative;
  }

  .services-title {
    font-size: 2rem;
    font-weight: 700;
    color: #0b1c3f;
    margin-bottom: 0.75rem;
  }

  .services-description {
    color: #475569;
    max-width: 42rem;
  }

  .service-card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    padding: 2rem;
    border-radius: 0.75rem;
    transition: all 0.3s;
    box-shadow: 0 10px 25px rgba(11,42,91,0.05);
  }

  .service-card:hover {
    border-color: #0b2a5b;
    box-shadow: 0 20px 40px rgba(11,42,91,0.12);
    transform: translateY(-4px);
  }

  .service-card-title-wrapper {
    border-left: 4px solid #0b2a5b;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }

  .service-card-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #0b1c3f;
  }

  .service-card-desc {
    color: #475569;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .services-floating-button {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    background-color: #0b2a5b;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    box-shadow: 0 10px 20px rgba(11,42,91,0.2);
    cursor: pointer;
    transition: 0.3s;
  }

  .services-floating-button:hover {
    background-color: #163d82;
  }

  .contact-section {
    background-color: white;
  }
`}</style>

    <div className="services-container">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          {/* Image */}
          <div className="hero-image-wrapper">
            <div className="hero-image-border"></div>
            <img
              src="https://assets.weforum.org/sites/a0e0X00000V9acwQAB/hvk-jP6bGDo_786.jpg"
              alt="Security Operations Center"
              className="hero-image"
            />
          </div>

          {/* Content */}
          <div className="hero-text">
            <span className="hero-subtitle">Cybersecurity Services</span>
            <h1 className="hero-title">
              Enterprise Cybersecurity <br /> & Security Operations
            </h1>
            <p className="hero-description">
              We deliver globally aligned cybersecurity operations, incident
              response, identity protection, and advanced technical security
              services for modern enterprises.
            </p>
            <button className="hero-button" onClick={scrollToContact}>
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="services-container-inner">
          <div className="services-header">
            <h2 className="services-title">Enterprise Security Capabilities</h2>
            <p className="services-description">
              Our portfolio spans security operations, cloud & application
              security, compliance, and advanced cyber defense solutions.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-title-wrapper">
                  <h3 className="service-card-title">{service.title}</h3>
                </div>
                <p className="service-card-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Button */}
        <Link to="/services-details" className="services-floating-button">
          View Service Details
        </Link>

      </section>

      {/* CONTACT SECTION */}
      <section id="contact-us" className="contact-section">
        <ContactUs />
      </section>

    </div>
    </>
  );
};

export default Services;
