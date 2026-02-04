import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  { title: "Cybersecurity Operations Center (CSOC)", desc: "24/7 monitoring, threat detection, and incident response operations." },
  { title: "Incident Response & Management", desc: "Rapid containment, investigation, and recovery from cybersecurity incidents." },
  { title: "Incident Response Plans & Procedures", desc: "Structured response playbooks aligned with regulatory and operational needs." },
  { title: "Threat Intelligence Integration", desc: "Actionable intelligence integration to enhance detection and response." },
  { title: "Role of Security Analysts in a CSOC", desc: "Definition of Tier 1, Tier 2, and Tier 3 analyst roles and workflows." },
  { title: "CSOC Staffing & Talent Retention", desc: "Advisory services to address analyst burnout and talent challenges." },
  { title: "Aadhaar Authentication & eKYC Integration", desc: "UIDAI-compliant Aadhaar authentication and eKYC integration services." },
  { title: "Vulnerability Assessment & Penetration Testing (VAPT)", desc: "Identification and exploitation of security vulnerabilities across environments." },
  { title: "Cloud Security", desc: "Security architecture and protection for AWS, Azure, and GCP." },
  { title: "Application Security", desc: "Secure SDLC, code reviews, and application security testing." },
  { title: "Network Implementation", desc: "Design and deployment of secure enterprise network infrastructure." },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Inter', Arial, sans-serif;
        }

        .page {
          background: #f8fafc;
          color: #1e293b;
        }

        /* HERO */
        .hero {
          background: #e2e8f0;
          padding: 100px 24px;
        }

        .hero-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .img-wrapper {
          position: relative;
        }

        .img-border {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(156,163,175,0.3);
          transform: translate(-12px, 12px);
          border-radius: 12px;
        }

        .hero img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 12px;
        }

        .tag {
          color: #2563eb;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 1.5px;
          font-weight: 600;
        }

        .hero h1 {
          font-size: 42px;
          margin: 18px 0;
          line-height: 1.2;
        }

        .hero p {
          color: #475569;
          font-size: 17px;
          max-width: 500px;
        }

        /* SERVICES */
        .services {
          padding: 80px 24px;
        }

        .services-container {
          max-width: 1200px;
          margin: auto;
        }

        .services h2 {
          font-size: 32px;
          margin-bottom: 10px;
          color: #1e293b;
        }

        .services-desc {
          color: #475569;
          max-width: 650px;
        }

        .grid {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
        }

        /* CARD */
        .card {
          background: rgba(255,255,255,0.8);
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          backdrop-filter: blur(8px);
          transition: all 0.35s ease;
          position: relative;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 40px rgba(37,99,235,0.15);
        }

        .card-title {
          border-left: 4px solid #2563eb;
          padding-left: 12px;
          margin-bottom: 12px;
        }

        .card h3 {
          font-size: 18px;
          margin: 0;
          color: #1e293b;
        }

        .card p {
          font-size: 14px;
          color: #475569;
          line-height: 1.65;
        }

        /* FLOATING CTA */
        .floating-btn {
          position: fixed;
          bottom: 26px;
          right: 26px;
          background: #2563eb;
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(37,99,235,0.35);
          transition: all 0.3s ease;
        }

        .floating-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 35px rgba(37,99,235,0.45);
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 32px;
          }
        }
      `}</style>

      <div className="page">
        <section className="hero">
          <div className="hero-container">
            <div className="img-wrapper">
              <div className="img-border"></div>
              <img
                src="https://assets.weforum.org/sites/a0e0X00000V9acwQAB/hvk-jP6bGDo_786.jpg"
                alt="CSOC"
              />
            </div>

            <div>
              <span className="tag">Cybersecurity Services</span>
              <h1>
                Enterprise Cybersecurity <br /> & Security Operations
              </h1>
              <p>
                We deliver cybersecurity operations, incident response,
                identity security, and technical assurance services for modern enterprises.
              </p>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="services-container">
            <h2>Enterprise Security Capabilities</h2>
            <p className="services-desc">
              Our services span security operations, identity & compliance,
              and advanced technical security testing.
            </p>

            <div className="grid">
              {services.map((s, i) => (
                <div className="card" key={i}>
                  <div className="card-title">
                    <h3>{s.title}</h3>
                  </div>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <button
          className="floating-btn"
          onClick={() => navigate("/services-details")}
        >
          View Service Details →
        </button>
      </div>
    </>
  );
};

export default Services;
