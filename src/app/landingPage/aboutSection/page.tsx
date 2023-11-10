"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import CommonButton from "@/components/buttonComponent/page";
import { useInView } from "react-intersection-observer";
import ReadMoreButton from "@/components/commonComponents/readMore/page";
interface AboutSectionProps {
  text: string;
  maxLength: number;
}

const AboutSection = ({ text, maxLength } : any ) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphText = `
  Commodo elementum, sed imperdiet nunc euismod etiam aliquet
  viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis
  magna facilisi fermentum, euismod vitae. Porttitor sit tincidunt
  dictum facilisi eget orci velit. Nulla laoreet nunc gravida augue
  aenean sed elementum, in.
`;
  const displayText = typeof text === 'string' ? (isExpanded ? text : `${text.slice(0, maxLength)}...`) : '';

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div>
      <div className={styles["main-container"]}>
        <div className={styles["container"]}>
          <div className={styles["section-one"]}>
            <div className={styles["sub-section"]}>
              <h6>99%</h6>
              <p>Success in getting customer </p>
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
      <div className={styles["about-us"]} ref={ref}>
        <div className={styles["about"]}>
          <div className={inView ? styles["about-img"] : " "}>
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
            <h2>
              We’re On Mission To Help Business Grow Faster Thanever.
            </h2>
            <p>{displayText}</p>
            <div className={styles["header-btn"]}>
             
              <ReadMoreButton  text={paragraphText} maxLength={100}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
