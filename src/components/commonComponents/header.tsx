"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss"; // Correct import path

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${styles.navbar} ${isSticky ? styles.sticky : ""} ${
        isMenuOpen ? styles.open : ""
      }`}
    >
      <div className={styles.logo}>
        <Link href="/">
          <div className={styles["logo"]}>
            <Image
              alt="logo"
              src="/assets/logo/logo.png"
              width={100}
              height={50}
            />
          </div>
        </Link>
      </div>
      <div
        className={styles.menuToggle}
        onClick={toggleMenu}
      >
        <Image
          src="/assets/menu.png"
          width={30}
          height={30}
          alt="about us"
          sizes='100vw'
        />
      </div>

      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Services</Link>
        </li>
        <li>
          <Link href="#">Portfolios</Link>
        </li>
        <li>
          <Link href="#">Careers</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
