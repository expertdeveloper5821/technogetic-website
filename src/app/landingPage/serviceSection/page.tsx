"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import CommonButton from "@/components/buttonComponent/page";
import { useInView } from 'react-intersection-observer';
import ReadMoreButton from "@/components/commonComponents/readMore/page";

const ServiceSection = ({ text, maxLength } : any) => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphText = `
  Commodo elementum, sed imperdiet nunc euismod etiam aliquet
  viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis
  magna facilisi fermentum, euismod vitae. Porttitor sit tincidunt
  dictum facilisi eget orci velit. Nulla laoreet nunc gravida augue
  aenean sed elementum, in.
`;
  const displayText = typeof text === 'string' ? (isExpanded ? text : `${text.slice(0, maxLength)}...`) : '';


  return (
    <div  className={styles["main-container"]}  ref={ref}>
      <div className={styles["container"]} >
        <div className={styles["main-head"]}>
          <h6 id="services">Services</h6>
          <h1 className={inView ? styles["main-heading"]: ""}>Our Services</h1>
          <p>
            Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
            enim. Adipiscing nunc condimentum risus id. Aquam mattis magna
            facilisi
          </p>
        </div>
      </div>
      <div className={styles["services"]}>
        <div className={styles["services-box"]}>
          <div className={inView ? styles["box"]  : " " }>
            <div className={styles["box-title"]}>
              <h3>Mobile Development</h3>
              <div className={styles["box-img"]}>
                <Image
                  src="/assets/services/s1.png"
                  alt="Mobile Development"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <p>{displayText}</p>
            <div className={styles["header-btn"]}>
            <ReadMoreButton  text={paragraphText} maxLength={100}/>
            </div>
          </div>
          <div className={inView ? styles["box-two"] : " "}>
            <div className={styles["box-title"]}>
              <h3>Back-end Development</h3>
              <div className={styles["box-img"]}>
                <Image
                  src="/assets/services/s2.png"
                  alt="Back-end Development"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <p>{displayText}</p>
            <div className={styles["header-btn"]}>
            <ReadMoreButton  text={paragraphText} maxLength={100}/>
            </div>
          </div>
          
        </div>
        
      </div>
      <div className={styles["services"]}>
        <div className={styles["services-box"]}>
          <div className={inView ? styles["box-two"]: " "}>
            <div className={styles["box-title"]}>
              <h3>Front-end Development</h3>
              <div className={styles["box-img"]}>
                <Image
                  src="/assets/services/s3.png"
                  alt="Front-end Development"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <p>{displayText}</p>
            <div className={styles["header-btn"]}>
            <ReadMoreButton  text={paragraphText} maxLength={100}/>
            </div>
          </div>
          <div className={inView ? styles["box"]  : " "}>
            <div className={styles["box-title"]}>
              <h3>AI Development</h3>
              <div className={styles["box-img"]}>
                <Image
                  src="/assets/services/s4.png"
                  alt="AI Development"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <p>{displayText}</p>
            <div className={styles["header-btn"]}>
            <ReadMoreButton  text={paragraphText} maxLength={100}/>
            </div>
          </div>
          
        </div>
        
      </div>
      <div className={styles["services"]}>
        <div className={styles["services-box"]}>
          <div className={inView ? styles["box"]  : " "}>
            <div className={styles["box-title"]}>
              <h3>Computer Development</h3>
              <div className={styles["box-img"]}>
                <Image
                  src="/assets/services/s5.png"
                  alt="Computer Development"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <p>{displayText}</p>
            <div className={styles["header-btn"]}>
            <ReadMoreButton  text={paragraphText} maxLength={100}/>
            </div>
          </div>
          <div className={inView ? styles["box-two"]: " "}>
            <div className={styles["box-title"]}>
              <h3>Team Augmentation</h3>
              <div className={styles["box-img"]}>
                <Image
                  src="/assets/services/s6.png"
                  alt="Team Augmentation"
                  width={50}
                  height={50}
                />
              </div>
            </div>
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

export default ServiceSection;
