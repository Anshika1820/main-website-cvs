import React, { useEffect } from "react";

const HomeAbout = () => {

  useEffect(() => {
    const section = document.querySelector(".about-section");
    section.classList.add("show");
  }, []);

  return (
    <>
      <style>{`
        .about-section {
          padding: 120px 8%;
          background: #ffffff;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.9s ease;
        }

        .about-section.show {
          opacity: 1;
          transform: translateY(0);
        }

        .about-left h2 {
          font-size: 40px;
          font-weight: 800;
          color: #0b1c3d;
          margin-bottom: 22px;
        }

        .about-left p {
          font-size: 17px;
          line-height: 1.8;
          color: #475569;
          margin-bottom: 28px;
        }

        .about-points {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .about-points span {
          font-size: 15px;
          color: #1e293b;
          font-weight: 600;
        }

        .about-right {
          background: linear-gradient(180deg, #0b1c3d, #020617);
          color: #e5e7eb;
          padding: 50px;
          border-radius: 22px;
          box-shadow: 0 30px 70px rgba(2,6,23,0.6);
        }

        .about-right h3 {
          font-size: 24px;
          margin-bottom: 18px;
          color: #38bdf8;
        }

        .about-right p {
          font-size: 15px;
          line-height: 1.7;
          color: #cbd5f5;
        }

        @media (max-width: 900px) {
          .about-section {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }
      `}</style>

      <section className="about-section">
        <div className="about-left">
          <h2>Securing Digital Futures</h2>
          <p>
            CodeVirus Security is focused on protecting organizations and individuals
            against evolving cyber threats through strong security practices,
            expert training, and real-world defense strategies.
          </p>

          <div className="about-points">
            <span>✔ Enterprise-grade cybersecurity solutions</span>
            <span>✔ Industry-oriented security training</span>
            <span>✔ Practical, real-world security approach</span>
          </div>
        </div>

        <div className="about-right">
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower businesses and learners with reliable,
            scalable, and modern cybersecurity solutions while building a
            security-first digital culture worldwide.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
