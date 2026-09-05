import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import "./Navbar.css";

function Navbar() {

    const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`} >

            <div className="navbar-container">

                {/* Logo */}
                <a
                    href="/"
                    className="navbar-logo"
                    aria-label="SETU DIGITAL Home"
                    onClick={closeMenu}
                >
                    SETU
                    <span>DIGITAL</span>
                </a>


                {/* Desktop Navigation */}
                <nav
                    className="navbar-nav"
                    aria-label="Main navigation"
                >
                    <a href="#services">Services</a>
                    <a href="#work">Work</a>
                    <a href="#process">Process</a>
                    <a href="#about">About</a>
                </nav>


                {/* Desktop CTA */}
                <a
                    href="#contact"
                    className="navbar-cta"
                >
                    Start a Project
                </a>


                {/* Mobile Menu Button */}
                <button
                    className="navbar-menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>

            </div>


            {/* Mobile Menu */}
            <div
                className={`navbar-mobile-menu ${
                    menuOpen ? "is-open" : ""
                }`}
            >
                <nav aria-label="Mobile navigation">

                    <a
                        href="#services"
                        onClick={closeMenu}
                    >
                        Services
                    </a>

                    <a
                        href="#work"
                        onClick={closeMenu}
                    >
                        Work
                    </a>

                    <a
                        href="#process"
                        onClick={closeMenu}
                    >
                        Process
                    </a>

                    <a
                        href="#about"
                        onClick={closeMenu}
                    >
                        About
                    </a>

                    <a
                        href="#contact"
                        className="mobile-menu-cta"
                        onClick={closeMenu}
                    >
                        Start a Project
                    </a>

                </nav>
            </div>

        </header>
    );
}

export default Navbar;