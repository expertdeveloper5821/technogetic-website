"use client";
// Import necessary libraries and components
import React from "react";
import CommonButton from "@/components/buttonComponent/page";
import { useInView } from 'react-intersection-observer';
import styles from '@/components/landingPage/bannerSection/style.module.scss';

// Define the props interface
interface BannerSectionProps {
  title: string;
  description: string;
  sectionsImages: string[];
}

// Define the BannerSection component
const BannerSection: React.FC<BannerSectionProps> = ({ title, description, sectionsImages }) => {
  // Use the react-intersection-observer to detect when the section is in view
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className={styles["banner-section"]}>
      <div className={styles["banner-subsection"]}>
        <div className={styles["banner-title"]} ref={ref}>
          <h1 className={inView ? styles["head-title"] : ""}>
            {title}
          </h1>
          <div className={styles["banner-para"]}>
            <p>
              {description}
            </p>
          </div>
          <div className={styles["header-btn"]}>
            {/* You can customize CommonButton props as needed */}
            <CommonButton
              text="Explore Our Services"
              type="primary"
              className={styles["custom-btn"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

