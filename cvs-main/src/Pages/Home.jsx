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
          background: linear-gradient(120deg, #ffffff 55%, #0b1c3d 45%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(37,99,235,0.15), transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(15,23,42,0.25), transparent 45%);
          pointer-events: none;
        }

        .hero .container {
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
          background: rgba(37,99,235,0.1);
          color: #1d4ed8;
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
          font-family: cursive;
        }

        .hero h1 span {
          color: #1d4ed8;
          font-size: 50px;
        }

        .hero p {
          font-size: 18px;
          line-height: 1.7;
          color: #334155;
          max-width: 520px;
          margin-bottom: 44px;
        }

        .actions {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-outline {
          padding: 14px 36px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #1d4ed8, #2563eb);
          color: white;
          box-shadow: 0 18px 40px rgba(37,99,235,0.35);
        }

        .btn-outline {
          border: 2px solid #1d4ed8;
          color: #1d4ed8;
        }

        .visual {
          background: linear-gradient(180deg, #0b1c3d, #020617);
          border-radius: 28px;
          padding: 50px;
          color: #e5e7eb;
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
          font-size: 24px;
          margin-bottom: 18px;
          color: #38bdf8;
        }

        .visual ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .visual li {
          margin-bottom: 14px;
          font-size: 14px;
          color: #cbd5f5;
        }

        /* ================= MOBILE ================= */

        @media (max-width: 900px) {
          .hero {
            background: #ffffff;
          }

          .hero .container {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .visual {
            transform: translateY(40px);
          }

          .visual.show {
            transform: translateY(0);
          }
        }

        @media (max-width: 600px) {
          .hero {
            padding-top: 80px;
          }

          .hero h1 {
            font-size: 36px;
          }

          .hero h1 span {
            font-size: 34px;
          }

          .hero p {
            font-size: 15px;
          }

          .actions {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-primary,
          .btn-outline {
            width: 100%;
            text-align: center;
          }

          .visual {
            padding: 32px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="container">
          <div className={`content ${active ? "show" : ""}`}>
            <div className="tag">Enterprise Cybersecurity Solutions</div>
            <h1>
              Welcome to <span>CODEVIRUS SECURITY</span>
            </h1>
            <p>
              We protect your network with layered security, combining next-gen firewalls, intrusion prevention, secure access, and zero-trust principles.
            </p>

            <div className="actions">
              <a href="/" className="btn-primary">Get Started</a>
              <a href="/" className="btn-outline">How We Operate</a>
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
      <HomeAbout/>
      <HomeBlog/>
      <HomeContact/>
    </>
  );
};

export default Home;
