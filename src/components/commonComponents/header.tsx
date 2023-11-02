import React from "react";
import styles from './style.module.scss'; // Correct import path
import Image from "next/image";
import Link from "next/link";
import CommonButton from "../buttonComponent/page";

const Header = () => {
  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["header"]}>
        <div className={styles["logo"]}>
          <Image alt="logo" src="/assets/logo/logo.png" width={100} height={50} />
        </div>
        <div className={styles["menu"]}>
          <ul className={styles["menu-list"]}>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolios</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles['header-btn']}>
            <CommonButton text="Primary Button" type="primary" className={styles['custom-btn']} />
        </div>
      </div>
    </div>
  );
};

export default Header;