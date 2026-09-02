
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [username, setUsername] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    const name =
      localStorage.getItem("username") ||
      sessionStorage.getItem("username");

    if (name) {
      setUsername(name);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("https://uni-web-22c9.onrender.com/logout", {
        method: "POST",
        credentials: "include"
      });
    } catch (error) {
      console.error("Logout error:", error);
    }

    localStorage.removeItem("username");
    sessionStorage.removeItem("username");

    setUsername("");
    setMobileMenuOpen(false);

    alert("Logged out successfully!");
    window.location.href = "/Uni-web/Login.html";
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`container ${bg ? "darknav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />

      {/* Hamburger Icon */}
      <div 
        className={`hamburger ${mobileMenuOpen ? "active" : ""}`} 
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links List */}
      <ul className={mobileMenuOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500} onClick={closeMobileMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="programs" smooth={true} offset={-280} duration={500} onClick={closeMobileMenu}>
            Programs
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} offset={-160} duration={500} onClick={closeMobileMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to="gallery" smooth={true} offset={-290} duration={500} onClick={closeMobileMenu}>
            Gallery
          </Link>
        </li>

        <li>
          <Link to="testimony" smooth={true} offset={-290} duration={500} onClick={closeMobileMenu}>
            Testimony
          </Link>
        </li>

        <li>
          <Link to="contact" smooth={true} offset={-250} duration={500} onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>

        {username ? (
          <>
            <li className="welcome-text">
              Welcome, <strong>{username}</strong>
            </li>

            <li>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/Uni-web/Signup.html" onClick={closeMobileMenu}>
                <button className="btn">Sign Up</button>
              </a>
            </li>

            <li>
              <a href="/Uni-web/Login.html" onClick={closeMobileMenu}>
                <button className="btn">Login</button>
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;





// ================================================================================================
