import React from "react";

const Signup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Signup</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Signup</button>
        </form>
        <span className="close-btn" onClick={onClose}>×</span>

        <style>{`
          .modal-overlay {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(15, 23, 42, 0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            backdrop-filter: blur(6px);
          }

          .modal-content {
            background: #ffffff;
            border-radius: 20px;
            padding: 40px 30px;
            width: 90%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            position: relative;
            box-shadow: 0 20px 50px rgba(15, 23, 42, 0.2);
            border-top: 4px solid #1e3a8a;
          }

          .modal-content h2 {
            text-align: center;
            color: #1e3a8a;
            font-size: 28px;
            margin-bottom: 10px;
          }

          .modal-content form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .modal-content input {
            padding: 12px 15px;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            font-size: 14px;
            background: #f8fafc;
            color: #0f172a;
            outline: none;
            transition: 0.25s;
          }

          .modal-content input::placeholder {
            color: #64748b;
          }

          .modal-content input:focus {
            border-color: #1e3a8a;
            background: #ffffff;
            box-shadow: 0 0 0 3px rgba(30,58,138,0.15);
          }

          .modal-content button {
            padding: 12px;
            background: linear-gradient(135deg, #1e3a8a, #1d4ed8);
            color: #ffffff;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font-weight: 600;
            transition: 0.3s;
          }

          .modal-content button:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 18px rgba(30,58,138,0.3);
          }

          .close-btn {
            position: absolute;
            top: 12px;
            right: 18px;
            font-size: 26px;
            cursor: pointer;
            color: #1e3a8a;
            transition: 0.2s;
          }

          .close-btn:hover {
            color: #1d4ed8;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Signup;
