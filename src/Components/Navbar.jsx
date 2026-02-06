import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/aboutus" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contactus"}
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>

          <ul className="nav-links">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <button
                className="btn-outline"
                onClick={() => setIsSignupOpen(true)}
              >
                Signup
              </button>
            </li>
            <li>
              <button
                className="btn-primary"
                onClick={() => setIsLoginOpen(true)}
              >
                Login
              </button>
            </li>
          </ul>

          <div
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <button onClick={() => setIsSignupOpen(true)}>Signup</button>
          <button className="filled" onClick={() => setIsLoginOpen(true)}>
            Login
          </button>
        </div>

        <style>{`
          .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background: #ffffff;
            border-bottom: 1px solid #e6ecf5;
            z-index: 10000;
            transition: all 0.3s ease;
          }

          .navbar.scrolled {
            box-shadow: 0 6px 20px rgba(11,42,91,0.08);
          }

          .nav-inner {
            width: 100%;
            padding: 0 40px;
            display: flex;
            align-items: center;
          }

          .logo img {
            height: 60px;
            width: 120px;
            display: block;
          }

          .nav-links {
            list-style: none;
            display: flex;
            gap: 36px;
            align-items: center;
            margin-left: auto;
          }

          .nav-links a {
            text-decoration: none;
            color: #0b2a5b;
            font-weight: 600;
            transition: all 0.25s ease;
            letter-spacing: 0.3px;
          }

          .nav-links a:hover {
            color: #163d82;
          }

          .active {
            border-bottom: 2px solid #0b2a5b;
            padding-bottom: 4px;
          }

          .btn-outline {
            border: 1.5px solid #0b2a5b;
            background: white;
            color: #0b2a5b;
            padding: 6px 14px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: 0.25s;
          }

          .btn-outline:hover {
            background: #f4f7fd;
          }

          .btn-primary {
            background: #0b2a5b;
            color: white;
            border: none;
            padding: 6px 14px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: 0.25s;
          }

          .btn-primary:hover {
            background: #163d82;
          }

          .menu-icon {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 4px;
          }

          .menu-icon span {
            width: 24px;
            height: 3px;
            background: #0b2a5b;
            border-radius: 2px;
          }

          .mobile-menu {
            display: none;
            flex-direction: column;
            background: #ffffff;
            padding: 16px;
            border-top: 1px solid #e6ecf5;
          }

          .mobile-menu a {
            padding: 10px 0;
            text-decoration: none;
            color: #0b2a5b;
            font-weight: 600;
          }

          .mobile-menu button {
            margin-top: 10px;
            padding: 8px;
          }

          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }

            .menu-icon {
              display: flex;
              margin-left: auto;
            }

            .mobile-menu.open {
              display: flex;
            }
          }
        `}</style>
      </nav>

      <Signup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Navbar;
