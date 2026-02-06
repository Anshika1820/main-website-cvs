import React, { useEffect } from "react";

const HomeContact = () => {

  useEffect(() => {
    const section = document.querySelector(".contact-section");
    section.classList.add("show");
  }, []);

  return (
    <>
      <style>{`
        .contact-section {
          padding: 120px 8%;
          background: linear-gradient(135deg, #0a1931, #020617);
          color: #ffffff;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.9s ease;
        }

        .contact-section.show {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-container {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 70px;
          align-items: center;
        }

        .contact-left h2 {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .contact-left p {
          font-size: 16px;
          line-height: 1.7;
          color: #cbd5e1;
          margin-bottom: 30px;
        }

        .contact-left span {
          display: block;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #93c5fd;
        }

        .contact-form {
          background: #ffffff;
          padding: 40px;
          border-radius: 18px;
          box-shadow: 0 30px 70px rgba(2,6,23,0.6);
        }

        .contact-form h3 {
          color: #0a1931;
          margin-bottom: 24px;
          font-size: 22px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 14px 16px;
          margin-bottom: 16px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          color: #0f172a;
        }

        .contact-form textarea {
          resize: none;
          height: 120px;
        }

        .contact-form button {
          padding: 14px;
          width: 100%;
          border-radius: 999px;
          border: none;
          background: linear-gradient(135deg, #0a1931, #0f2a5a);
          color: #ffffff;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .contact-form button:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .contact-section {
            padding: 90px 6%;
          }

          .contact-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .contact-left h2 {
            font-size: 36px;
          }
        }

        @media (max-width: 600px) {
          .contact-section {
            padding: 70px 5%;
          }

          .contact-left h2 {
            font-size: 30px;
          }

          .contact-left p {
            font-size: 14px;
          }

          .contact-form {
            padding: 28px 22px;
          }

          .contact-form h3 {
            font-size: 20px;
          }

          .contact-form input,
          .contact-form textarea {
            font-size: 13px;
            padding: 12px 14px;
          }

          .contact-form textarea {
            height: 100px;
          }
        }
      `}</style>

      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-left">
            <span>Get In Touch</span>
            <h2>Let’s Secure Your Digital Presence</h2>
            <p>
              Whether you are looking for cybersecurity solutions, professional
              training, or expert guidance, our team is ready to assist you.
              Reach out to us and let’s start the conversation.
            </p>
          </div>

          <div className="contact-form">
            <h3>Contact Us</h3>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default HomeContact;
