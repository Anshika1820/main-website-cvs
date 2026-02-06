import React, { useEffect, useState } from "react";
import HomePageServices from "../Components/HomePageService";
import HomeAbout from "../Components/HomeAbout";
import HomeBlog from "../Components/HomeBlog";
import HomeContact from "../Components/HomeContact";

const Home = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(120deg, #ffffff 55%, #0a1931 45%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(10,25,49,0.08), transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(10,25,49,0.18), transparent 45%);
        }

        .hero-container {
          max-width: 1200px;
          margin: auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          position: relative;
          z-index: 2;
        }

        .content {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease;
        }

        .content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .tag {
          display: inline-block;
          background: rgba(10,25,49,0.08);
          color: #0a1931;
          padding: 8px 18px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 24px;
        }

        .hero h1 {
          font-size: 54px;
          line-height: 1.15;
          margin-bottom: 26px;
          font-weight: 900;
          color: #0a1931;
          font-family: cursive;
        }

        .hero h1 span {
          color: #0f2a5a;
          font-size: 50px;
        }

        .hero p {
          font-size: 18px;
          line-height: 1.7;
          color: #475569;
          max-width: 520px;
          margin-bottom: 44px;
        }

        .hero-actions {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .hero-btn-primary,
        .hero-btn-outline {
          padding: 14px 36px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .hero-btn-primary {
          background: linear-gradient(135deg, #0a1931, #0f2a5a);
          color: white;
          box-shadow: 0 18px 40px rgba(10,25,49,0.35);
        }

        .hero-btn-primary:hover {
          transform: translateY(-3px);
        }

        .hero-btn-outline {
          border: 2px solid #0a1931;
          color: #0a1931;
          background: white;
        }

        .hero-btn-outline:hover {
          background: #0a1931;
          color: white;
        }

        .visual {
          background: linear-gradient(180deg, #0a1931, #020617);
          border-radius: 28px;
          padding: 50px;
          color: #e2e8f0;
          box-shadow: 0 40px 80px rgba(2,6,23,0.6);
          opacity: 0;
          transform: translateX(50px);
          transition: all 1s ease;
        }

        .visual.show {
          opacity: 1;
          transform: translateX(0);
        }

        .visual h3 {
          margin-bottom: 20px;
          color: #ffffff;
        }

        .visual ul {
          line-height: 2;
          padding-left: 0;
          list-style: none;
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="hero-container">
          <div className={`content ${active ? "show" : ""}`}>
            <div className="tag">Enterprise Cybersecurity Solutions</div>

            <h1>
              Welcome to <span>CODEVIRUS SECURITY</span>
            </h1>

            <p>
              We protect your network with layered security, combining next-gen
              firewalls, intrusion prevention, secure access, and zero-trust
              principles.
            </p>

            <div className="hero-actions">
              <a href="/" className="hero-btn-primary">Get Started</a>
              <a href="/" className="hero-btn-outline">How We Operate</a>
            </div>
          </div>

          <div className={`visual ${active ? "show" : ""}`}>
            <h3>Why Companies Trust Us</h3>
            <ul>
              <li>✔ Zero-Trust Network Architecture</li>
              <li>✔ Advanced Threat Intelligence</li>
              <li>✔ 24/7 Monitoring & Response</li>
              <li>✔ Global Compliance Standards</li>
            </ul>
          </div>
        </div>
      </section>

      <HomePageServices />
      <HomeAbout />
      <HomeBlog />
      <HomeContact />
    </>
  );
};

export default Home;
