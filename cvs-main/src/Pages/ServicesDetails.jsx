import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesDetails.css"; // Import CSS file

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
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                }

                /* Page Header */
                .page-header {
                background-color: #f1f5f9;
                border-bottom: 1px solid #e2e8f0;
                padding: 3.5rem 1.5rem;
                }

                .page-header-inner {
                max-width: 1100px;
                margin: 0 auto;
                }

                .page-subtitle {
                font-size: 0.75rem;
                font-weight: 600;
                color: #1e40af;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                }

                .page-title {
                font-size: 2rem;
                font-weight: 700;
                margin: 0.75rem 0 1rem 0;
                color: #111827;
                line-height: 1.2;
                }

                .page-description {
                font-size: 1rem;
                color: #475569;
                max-width: 48rem;
                }

                /* Services Content */
                .services-content {
                padding: 3.5rem 1.5rem;
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
                border-left: 4px solid #1d4ed8;
                padding-left: 1.5rem;
                padding-top: 2rem;
                padding-bottom: 2rem;
                }

                .service-block-title {
                font-size: 1.5rem;
                font-weight: 600;
                color: #111827;
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
                padding: 0 1.5rem;
                }

                .contact-button {
                background-color: #1d4ed8;
                color: #ffffff;
                padding: 0.75rem 1.5rem;
                border-radius: 9999px;
                font-weight: 600;
                box-shadow: 0 4px 10px rgba(0,0,0,0.15);
                cursor: pointer;
                transition: background-color 0.3s;
                }

                .contact-button:hover {
                background-color: #1e40af;
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

          <ServiceBlock
            title="Cybersecurity Operations Center (CSOC)"
            description="A Cybersecurity Operations Center (CSOC) is a centralized function responsible for continuous monitoring, detection, analysis, and response to cybersecurity threats across an organization’s digital environment. Our CSOC services enable organizations to proactively identify threats, reduce response time, and maintain operational resilience."
            points={[
              "24/7 security monitoring and alert management",
              "Real-time threat detection and analysis",
              "Incident triage, escalation, and coordination",
              "Continuous improvement through threat intelligence and tuning",
            ]}
          />

          <ServiceBlock
            title="Incident Response & Management"
            description="We provide structured and rapid incident response services to help organizations contain, investigate, and recover from cybersecurity incidents while minimizing operational, financial, and reputational impact."
            points={[
              "Rapid incident containment and eradication",
              "Forensic investigation and root cause analysis",
              "Regulatory and stakeholder communication support",
              "Post-incident reporting and lessons learned",
            ]}
          />

          <ServiceBlock
            title="Incident Response Plans & Procedures"
            description="We design and implement incident response plans and procedures aligned with industry standards, regulatory requirements, and organizational risk profiles, ensuring preparedness before incidents occur."
            points={[
              "Customized incident response playbooks",
              "Alignment with NIST, ISO 27001, and regulatory frameworks",
              "Tabletop exercises and response simulations",
              "Clear roles, responsibilities, and escalation paths",
            ]}
          />

          <ServiceBlock
            title="Threat Intelligence Integration"
            description="Our threat intelligence services integrate internal telemetry and external intelligence feeds to improve detection accuracy, prioritization, and decision-making within security operations."
            points={[
              "Integration of commercial and open-source intelligence feeds",
              "Threat context enrichment for alerts and incidents",
              "Attack trend analysis and adversary profiling",
              "Actionable intelligence for proactive defense",
            ]}
          />

          <ServiceBlock
            title="Role of Security Analysts in a CSOC"
            description="We help organizations define and optimize CSOC analyst roles to ensure efficient operations, clear accountability, and effective incident handling across multiple tiers."
            points={[
              "Tier 1, Tier 2, and Tier 3 analyst role definition",
              "Alert handling and escalation workflows",
              "Skill development and operational maturity models",
              "Performance metrics and continuous improvement",
            ]}
          />

          <ServiceBlock
            title="CSOC Staffing & Talent Retention Challenges"
            description="We provide advisory services to address common CSOC challenges such as analyst burnout, skills shortages, and retention, helping organizations build sustainable security operations."
            points={[
              "CSOC staffing models and shift design",
              "Analyst workload and burnout reduction strategies",
              "Training, certification, and career progression planning",
              "Hybrid and managed SOC operating models",
            ]}
          />

          <ServiceBlock
            title="Aadhaar Authentication & eKYC Integration"
            description="We offer secure Aadhaar authentication and eKYC integration services in compliance with UIDAI guidelines, supporting regulated organizations and government ecosystems."
            points={[
              "OTP, biometric, and demographic authentication support",
              "UIDAI-compliant encryption and secure data handling",
              "Consent management and audit logging",
              "Integration support for AUA / KUA environments",
            ]}
          />

          <ServiceBlock
            title="Vulnerability Assessment & Penetration Testing (VAPT)"
            description="Our VAPT services identify exploitable vulnerabilities across applications, infrastructure, and networks using industry-recognized methodologies."
            points={[
              "Web, mobile, network, and cloud penetration testing",
              "Manual and automated vulnerability assessment",
              "Risk-based findings with remediation guidance",
              "Executive and technical reporting",
            ]}
          />

          <ServiceBlock
            title="Cloud Security"
            description="We help organizations secure cloud environments through architecture reviews, identity protection, data security, and continuous monitoring."
            points={[
              "AWS, Azure, and GCP security assessments",
              "Identity and access management (IAM)",
              "Data encryption and key management",
              "Cloud threat detection and monitoring",
            ]}
          />

          <ServiceBlock
            title="Application Security"
            description="Our application security services ensure that applications are designed, developed, and deployed securely throughout the SDLC."
            points={[
              "Secure code reviews and SAST/DAST",
              "OWASP Top 10 risk mitigation",
              "Secure SDLC implementation",
              "Developer security awareness",
            ]}
          />

          <ServiceBlock
            title="Network Implementation"
            description="We design and implement secure enterprise networks that support performance, scalability, and security requirements."
            points={[
              "Network segmentation and firewall deployment",
              "Secure routing, VPNs, and access control",
              "Monitoring and logging integration",
              "High availability and resilience design",
            ]}
          />

        </div>
      </section>

      {/* Sticky Contact Button */}
      <div className="contact-button-wrapper">
        <button
          onClick={() => navigate("/ContactUs")}
          className="contact-button"
        >
          Contact Us
        </button>
      </div>

    </div>
    </>
  );
};

export default ServicesDetails;