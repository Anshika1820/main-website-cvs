import React, { useEffect } from "react";

const HomePageService = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <>
      <style>{`
        .services-section {
          padding: 120px 8%;
          background: linear-gradient(180deg, #f9fbff, #ffffff);
          text-align: center;
        }

        .services-title {
          font-size: 42px;
          color: #0b1c3f;
          margin-bottom: 18px;
          font-weight: 800;
        }

        .services-subtitle {
          font-size: 16px;
          color: #64748b;
          margin-bottom: 70px;
          max-width: 700px;
          margin-inline: auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 40px;
        }

        .service-card {
          background: rgba(11, 28, 63, 0.06);
          padding: 50px 34px;
          border-radius: 20px;
          box-shadow: 0 20px 45px rgba(11, 28, 63, 0.08);
          transform: translateY(40px);
          opacity: 0;
          transition: all 0.7s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 4px;
          width: 100%;
          background: linear-gradient(90deg, #2563eb, #38bdf8);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .service-card.show {
          transform: translateY(0);
          opacity: 1;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(11, 28, 63, 0.15);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card h3 {
          color: #0b1c3f;
          font-size: 22px;
          margin-bottom: 14px;
          line-height: 1.35;
        }

        .service-card p {
          color: #5c6c8a;
          font-size: 15px;
          line-height: 1.7;
        }

        /* ========= TABLET ========= */
        @media (max-width: 900px) {
          .services-section {
            padding: 90px 6%;
          }

          .services-title {
            font-size: 36px;
          }

          .services-subtitle {
            margin-bottom: 50px;
          }
        }

        /* ========= MOBILE ========= */
        @media (max-width: 600px) {
          .services-section {
            padding: 70px 5%;
          }

          .services-title {
            font-size: 30px;
          }

          .services-subtitle {
            font-size: 14px;
            margin-bottom: 40px;
          }

          .services-grid {
            gap: 26px;
          }

          .service-card {
            padding: 36px 24px;
          }

          .service-card h3 {
            font-size: 18px;
          }

          .service-card p {
            font-size: 14px;
          }
        }
      `}</style>

      <section className="services-section">
        <h2 className="services-title">Some of Our Services</h2>
        <p className="services-subtitle">
          Enterprise-focused cybersecurity solutions designed to protect,
          monitor, and secure critical digital infrastructure.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Cyber Security Operations Center (CSOC)</h3>
            <p>
              Enterprise-grade 24/7 monitoring, threat detection, and
              incident response operations to safeguard critical systems.
            </p>
          </div>

          <div className="service-card">
            <h3>Threat Intelligence Integration</h3>
            <p>
              Actionable threat intelligence integration to strengthen
              detection capabilities and accelerate response time.
            </p>
          </div>

          <div className="service-card">
            <h3>Aadhaar Authentication & eKYC Integration</h3>
            <p>
              UIDAI-compliant Aadhaar authentication and eKYC integration
              services for secure and trusted digital verification.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageService;
