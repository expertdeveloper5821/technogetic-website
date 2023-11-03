import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import CommonButton from "@/components/buttonComponent/page";

const Testimonial = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["testimonial-section"]}>
        <div className={styles["container"]}>
          <div className={styles["main-head"]}>
            <h6>TESTIMONIALS</h6>
            <h1>Testimonials</h1>
            <p>
              Commodo elementum, sed imperdiet nunc euismod etiam aliquet
              viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis
              magna facilisi
            </p>
          </div>
          <div className={styles["work-btn"]}>
            <div className={styles["header-btn"]}>
              <CommonButton
                text="View All"
                type="primary"
                className={styles["work-button"]}
              />
            </div>
          </div>
        </div>
        <div className={styles["services"]}>
          <div className={styles["services-box"]}>
            <div className={styles["box"]}>
              <div className={styles["work-title"]}>
                <h2>
                The site is interactive and easier
                </h2>
              </div>
              <p>
              Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi
              </p>

              
            </div>
            <div className={styles["client-details"]}>
                <div>
                    <Image src="/assets/testimonial/t1.jpg" width={80} height={80} alt="xyz"/>
                </div>
                <div className={styles["client-name"]}>
                    <h5>Jhon William</h5>
                    <h6>FOUNDER FURNITI</h6>
                </div>

            </div>
            
          </div>
          <div className={styles["services-box"]}>
            <div className={styles["box"]}>
              <div className={styles["work-title"]}>
                <h2>
                The site is interactive and easier
                </h2>
              </div>
              <p>
                Commodo elementum, sed imperdiet nunc euismod etiam aliquet
                viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis
                magna facilisi
              </p>

              
            </div>
            <div className={styles["client-details"]}>
                <div>
                    <Image src="/assets/testimonial/t1.jpg" width={80} height={80} alt="xyz"/>
                </div>
                <div className={styles["client-name"]}>
                    <h5>Samantha William</h5>
                    <h6>FOUNDER FURNITI</h6>
                </div>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
