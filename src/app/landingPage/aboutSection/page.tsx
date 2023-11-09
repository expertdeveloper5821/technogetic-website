"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CommonButton from "@/components/buttonComponent/page";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.querySelector(".hideme");

    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={styles["main-container"]}>
        <div className={styles["container"]}>
          <div className={styles["section-one"]}>
            <div className={styles["sub-section"]}>
              <h6>99%</h6>
              <p>Success in getting customer</p>
            </div>
            <div className={styles["sub-section"]}>
              <h6>25k</h6>
              <p>Thousands of successful business</p>
            </div>
          </div>
          <div className={styles["section-two"]}>
            <div className={styles["sub-section"]}>
              <h6>120+</h6>
              <p>Total client who love Solvero</p>
            </div>
            <div className={styles["sub-section"]}>
              <h6>4.9</h6>
              <p>3.5 Reviews are very satisfied with us</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["about-us"]}>
        <div className={styles["about"]}>
          <div className={styles["about-img"]}>
            <Image
              src="/assets/about/about.jpg"
              alt="about us "
              width={550}
              height={550}
              layout="responsive"
            />
          </div>
          <div className={styles["about-content"]}>
            <h6>About us</h6>
            <h2>We’re On Mission To Help Business Grow Faster Thanever.</h2>
            <p>
              Commodo elementum, sed imperdiet nunc euismod etiam aliquet
              viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis
              magna facilisi fermentum, euismod vitae. Porttitor sit tincidunt
              dictum facilisi eget orci velit. Nulla laoreet nunc gravida augue
              aenean sed elementum, in.
            </p>
            <div className={styles["header-btn"]}>
              <CommonButton
                text="Learn More"
                type="primary"
                className={styles["custom-btn"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
