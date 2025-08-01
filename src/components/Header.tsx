import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import { useThemeStyles } from "../themes/useThemeStyles";
import { FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const styles = useThemeStyles();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const menuRef = useRef<HTMLDivElement | null>(null);
  console.log("ismobileopeen", isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      {!isMobileMenuOpen && (
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            ThemeSwitcher
          </Link>

          <button className={styles.menuButton} onClick={toggleMobileMenu}>
            {!isMobileMenuOpen && <FiMenu size={24} />}
          </button>

          <nav className={`${styles.nav} ${styles.desktopNav}`}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
            <Link to="/about" className={styles.navLink}>
              About
            </Link>
            <Link to="/contact" className={styles.navLink}>
              Contact
            </Link>
          </nav>
          <div className=" max-md:hidden">
            <ThemeSwitcher />
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <nav className={styles.mobileNav} ref={menuRef}>
          <Link to="/" className={styles.navLink} onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link
            to="/about"
            className={styles.navLink}
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={styles.navLink}
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
          <ThemeSwitcher />
        </nav>
      )}
    </header>
  );
};

export default Header;
