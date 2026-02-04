import React, { useEffect } from "react";

const HomeBlog = () => {

  useEffect(() => {
    const cards = document.querySelectorAll(".blog-card");

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
        .blog-section {
          padding: 110px 8%;
          background: #ffffff;
        }

        .blog-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .blog-header h2 {
          font-size: 40px;
          font-weight: 800;
          color: #0b1c3d;
          margin-bottom: 14px;
        }

        .blog-header p {
          font-size: 16px;
          color: #64748b;
          max-width: 700px;
          margin: auto;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .blog-card {
          background: #f8fafc;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 18px 40px rgba(2,6,23,0.08);
          transform: translateY(40px);
          opacity: 0;
          transition: all 0.7s ease;
        }

        .blog-card.show {
          transform: translateY(0);
          opacity: 1;
        }

        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(2,6,23,0.15);
        }

        .blog-image {
          height: 180px;
          background: linear-gradient(135deg, #0b1c3d, #020617);
        }

        .blog-content {
          padding: 26px 24px 30px;
        }

        .blog-content span {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          color: #2563eb;
          margin-bottom: 10px;
        }

        .blog-content h3 {
          font-size: 20px;
          color: #0f172a;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .blog-content p {
          font-size: 15px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .blog-content a {
          font-size: 14px;
          font-weight: 700;
          color: #0b1c3d;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .blog-content a:hover {
          color: #2563eb;
        }

        /* ===== TABLET ===== */
        @media (max-width: 900px) {
          .blog-section {
            padding: 90px 6%;
          }

          .blog-header h2 {
            font-size: 34px;
          }

          .blog-grid {
            gap: 32px;
          }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 600px) {
          .blog-section {
            padding: 70px 5%;
          }

          .blog-header h2 {
            font-size: 28px;
          }

          .blog-header p {
            font-size: 14px;
          }

          .blog-image {
            height: 160px;
          }

          .blog-content {
            padding: 22px 20px 26px;
          }

          .blog-content h3 {
            font-size: 17px;
          }

          .blog-content p {
            font-size: 14px;
          }
        }
      `}</style>

      <section className="blog-section">
        <div className="blog-header">
          <h2>Latest Security Insights</h2>
          <p>Stay updated with cybersecurity trends, threats, and best practices</p>
        </div>

        <div className="blog-grid">
          <div className="blog-card">
            <div className="blog-image"></div>
            <div className="blog-content">
              <span>Cybersecurity</span>
              <h3>Understanding Modern Cyber Attacks</h3>
              <p>
                Learn how today’s cyber threats work and how organizations
                can defend themselves effectively.
              </p>
              <a href="/">Read More →</a>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-image"></div>
            <div className="blog-content">
              <span>Network Security</span>
              <h3>Why Zero Trust Is the Future</h3>
              <p>
                Zero Trust security models are changing how enterprises
                protect their networks.
              </p>
              <a href="/">Read More →</a>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-image"></div>
            <div className="blog-content">
              <span>Cloud Security</span>
              <h3>Securing Cloud Infrastructure</h3>
              <p>
                Best practices to protect cloud environments from evolving
                cyber risks.
              </p>
              <a href="/">Read More →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBlog;
