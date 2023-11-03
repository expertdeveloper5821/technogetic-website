import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import CommonButton from "@/components/buttonComponent/page";

const JoinUs = () => {
  return (
    <div>
      <div className={styles["about-us"]}>
        <div className={styles["about"]}>
          <div className={styles["about-img"]}>
            <div className={styles["img-one"]}>
              <Image
                src="/assets/joinus/j1.jpg"
                alt="about us "
                width={0}
                height={0}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className={styles["img-two"]}>
              <Image
                src="/assets/joinus/j2.jpg"
                alt="about us "
                width={0}
                height={0}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles["about-content"]}>
            <div className={styles['demo']}>
            <h6>Join Us</h6>
            <h2>Several Things Define Us As a Company</h2>
            <p>
            Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc condimentum risus iquam.
            </p>
            <div className={styles["header-btn"]}>
              <CommonButton
                text="Join Us Now"
                type="primary"
                className={styles["custom-btn"]}
              />
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
