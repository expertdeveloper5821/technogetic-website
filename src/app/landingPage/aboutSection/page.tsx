"use client";
import React, { useState,useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { gsap } from 'gsap';
import CommonButton from "@/components/buttonComponent/page";
import { useInView } from "react-intersection-observer";
import ReadMoreButton from "@/components/commonComponents/readMore/page";
import AutoNumberCounter from "@/components/commonComponents/autoNumberCounter";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutSectionProps {
  text: string;
  maxLength: number;
}

const AboutSection = ({ text, maxLength } : any ) => {
  const [isExpanded, setIsExpanded] = useState(false);
 
  useEffect(() => {
    gsap.from('.your-element', {
      opacity: 100,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.your-element',
        start: 'top center+=1000',
        end: 'bottom center-=100',
        scrub: 0.5,
      },
    });
  }, []);

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
    <div  className="your-element">
      <div className={styles["main-container"]}>
        <div className={styles["container"]}>
          <div className={styles["section-one"]}>
            <div className={styles["sub-section"]} id="about">
              <h6><AutoNumberCounter max={100} speed={5} stopValues={[99, 100]}   />%</h6>
              <p>Success in getting customer </p>
            </div>
            <div className={styles["sub-section"]}>
              <h6><AutoNumberCounter max={25} speed={5} stopValues={[25, 26]}   />k</h6>
              <p>Thousands of successful business</p>
            </div>
          </div>
          <div className={styles["section-two"]}>
            <div className={styles["sub-section"]}>
              <h6><AutoNumberCounter max={120} speed={5} stopValues={[120, 121]}   />+</h6>
              <p>Total client who love Solvero</p>
            </div>
            <div className={styles["sub-section"]}>
              <h6><AutoNumberCounter max={5} speed={5} stopValues={[5,6]}   /></h6>
              <p>Reviews are very satisfied with us</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["about-us"]}  ref={ref}>
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
