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
          {/* LOGO */}
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>

          {/* DESKTOP MENU */}
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

          {/* HAMBURGER */}
          <div
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* MOBILE MENU */}
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
          * {
            box-sizing: border-box;
            font-family: Poppins, sans-serif;
          }

          .navbar {
            position: fixed;
            top: 14px;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 28px);
            max-width: 1200px;
            background: rgba(255,255,255,0.96);
            border-radius: 16px;
            border: 1px solid rgba(0,0,0,0.08);
            z-index: 1000;
            transition: box-shadow 0.3s ease;
          }

          .navbar.scrolled {
            box-shadow: 0 12px 30px rgba(0,0,0,0.15);
          }

          .nav-inner {
            height: 68px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          /* LOGO */
          .logo img {
            height: 48px;
          }

          /* DESKTOP LINKS */
          .nav-links {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 22px;
            margin-left: auto; /* PUSH MENU TO RIGHT */
          }

          .nav-links a {
            text-decoration: none;
            font-size: 15px;
            color: #020617;
            font-weight: 500;
            position: relative;
          }

          .nav-links a.active {
            color: #2563eb;
          }

          .btn-outline {
            padding: 6px 18px;
            border-radius: 999px;
            border: 1px solid #2563eb;
            background: transparent;
            color: #2563eb;
            font-weight: 600;
            cursor: pointer;
          }

          .btn-primary {
            padding: 7px 20px;
            border-radius: 999px;
            border: none;
            background: #2563eb;
            color: #fff;
            font-weight: 600;
            cursor: pointer;
          }

          /* HAMBURGER */
          .menu-icon {
            display: none;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
          }

          .menu-icon span {
            width: 26px;
            height: 3px;
            background: #020617;
            border-radius: 2px;
          }

          /* MOBILE MENU */
          .mobile-menu {
            position: absolute;
            top: 78px;
            left: 0;
            width: 100%;
            padding: 22px;
            background: white;
            border-radius: 14px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            transform: translateY(-120%);
            opacity: 0;
            transition: 0.35s ease;
          }

          .mobile-menu.open {
            transform: translateY(0);
            opacity: 1;
          }

          .mobile-menu a,
          .mobile-menu button {
            text-align: left;
            font-size: 16px;
            background: none;
            border: none;
            cursor: pointer;
          }

          .mobile-menu .filled {
            background: #2563eb;
            color: white;
            padding: 10px;
            border-radius: 10px;
          }

          /* RESPONSIVE */
          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
            .menu-icon {
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
