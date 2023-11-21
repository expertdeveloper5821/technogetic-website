"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import CommonButton from "@/components/buttonComponent/page";
import { useInView } from 'react-intersection-observer';
import ReadMoreButton from "@/components/commonComponents/readMore/page";

const WorkSection = ({ text, maxLength } : any ) => {
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
    <div  className={styles["main-container"]} ref={ref}>
      <div className={styles["container"]}>
        <div className={styles["main-head"]}>
          <h6 id="portfolios">Works</h6>
          <h1>Our Works</h1>
          <p>
            Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
            enim. Adipiscing nunc condimentum risus id. Aquam mattis magna
            facilisi
          </p>
        </div>
        {/* <div className={styles["work-btn"]}>
          <div className={styles["header-btn"]}>
            <CommonButton
              text="All Our Work"
              type="primary"
              className={styles["work-button"]}
            />
          </div>
        </div> */}
      </div>
      <div className={styles["services"]}>
        <div className={styles["services-box"]}>
          <div className={inView ? styles["box1"]: ""}>
            <Image
              src="/assets/works/work2.jpg"
              alt="Mobile Development"
              width={0}
              height={0}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={inView ? styles["box-two"]: ""}>
            <div className={styles["work-title"]}>
              <h6>DELIVERY SERVICE - ECOMMERCE</h6>
              <h2>
                We have developed an Android app for fast grocery delivery
              </h2>
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
          <div className={inView ? styles["box-two"]: ""}>
            <div className={styles["work-title"]}>
              <h6>AI - DEVELOPMENT</h6>
              <h2>
                We have developed an audio platform with smart advertising
              </h2>
            </div>
            <p>{displayText}</p>
            <div className={styles["header-btn"]}>
             
              <ReadMoreButton  text={paragraphText} maxLength={100}/>
            </div>
          </div>
          <div className={inView ? styles["box1"]: ""}>
            <Image
              src="/assets/works/work1.jpg"
              alt="Mobile Development"
              width={0}
              height={0}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className={styles["services"]}>
        <div className={styles["services-box"]}>
          <div className={inView ? styles["box1"]: ""}>
            <Image
              src="/assets/works/work3.jpg"
              alt="Mobile Development"
              width={0}
              height={0}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={inView ? styles["box-two"]: ""}>
            <div className={styles["work-title"]}>
              <h6>DELIVERY SERVICE - ECOMMERCE</h6>
              <h2>
                We have developed an Android app for fast grocery delivery
              </h2>
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

export default WorkSection;
