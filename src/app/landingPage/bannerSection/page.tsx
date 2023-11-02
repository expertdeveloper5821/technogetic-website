import React from "react";
import styles from "@/app/landingPage/bannerSection/style.module.scss";
import CommonButton from "@/components/buttonComponent/page";

const BannerSection = () => {
  return (
    <div className={styles["banner-section"]}>
      <div className={styles["banner-subsection"]}>
        <div className={styles["banner-title"]}>
          <h1 className={styles["head-title"]}>
            Quality Digital Services You Really Need!
          </h1>
          <div className={styles["banner-para"]}>
            <p>
              We build and transform businesses by launching market-leading
              digital products, platforms, and experiences that fuel their
              growth.
            </p>
          </div>
          <div className={styles["header-btn"]}>
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
