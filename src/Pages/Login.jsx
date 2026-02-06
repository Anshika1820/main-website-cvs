import React from "react";

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Login</h2>

        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>

        <span className="close-btn" onClick={onClose}>×</span>

        <style>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(15, 23, 42, 0.35);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
          }

          .modal-content {
            background: #ffffff;
            border-radius: 16px;
            padding: 36px 28px;
            width: 90%;
            max-width: 380px;
            display: flex;
            flex-direction: column;
            gap: 18px;
            position: relative;
            border: 1px solid #e5eaf2;
            box-shadow: 0 20px 50px rgba(11,42,91,0.12);
          }

          .modal-content h2 {
            text-align: center;
            color: #0b2a5b;
            font-size: 26px;
            margin-bottom: 6px;
          }

          .modal-content form {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .modal-content input {
            padding: 11px 14px;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            font-size: 14px;
            outline: none;
            transition: 0.2s;
          }

          .modal-content input:focus {
            border-color: #0b2a5b;
            box-shadow: 0 0 0 2px rgba(11,42,91,0.08);
          }

          .modal-content button {
            padding: 12px;
            background: #0b2a5b;
            color: #ffffff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: 0.25s;
          }

          .modal-content button:hover {
            background: #163d82;
          }

          .close-btn {
            position: absolute;
            top: 10px;
            right: 16px;
            font-size: 24px;
            cursor: pointer;
            color: #64748b;
          }

          .close-btn:hover {
            color: #0b2a5b;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Login;
