import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import CommonButton from "@/components/buttonComponent/page";

const ServiceSection = () => {
  return (
    <div className={styles["main-conatiner"]}>
      <div className={styles["conatiner"]}>
        <div className={styles["main-head"]}>
          <h6>Services</h6>
          <h1>Our Services</h1>
          <p>
            Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra
            enim. Adipiscing nunc condimentum risus id. Aquam mattis magna
            facilisi
          </p>
        </div>
      </div>
      <div className={styles["services"]}>
        <div className={styles["services-box"]}>
          <div className={styles["box"]}>
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
            <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi</p>
            <div className={styles["header-btn"]}>
              <CommonButton
                text="Discover More"
                type="primary"
                className={styles["custom-btn"]}
              />
            </div>
          </div>
          <div className={styles["box-two"]}>
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
            <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi</p>
            <div className={styles["header-btn"]}>
              <CommonButton
                text="Discover More"
                type="primary"
                className={styles["custom-btn"]}
              />
            </div>
          </div>
          
        </div>
        
      </div>
      <div className={styles["services"]}>
        <div className={styles["services-box"]}>
          <div className={styles["box-two"]}>
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
            <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi</p>
            <div className={styles["header-btn"]}>
              <CommonButton
                text="Discover More"
                type="primary"
                className={styles["custom-btn"]}
              />
            </div>
          </div>
          <div className={styles["box"]}>
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
            <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi</p>
            <div className={styles["header-btn"]}>
              <CommonButton
                text="Discover More"
                type="primary"
                className={styles["custom-btn"]}
              />
            </div>
          </div>
          
        </div>
        
      </div>
      <div className={styles["services"]}>
        <div className={styles["services-box"]}>
          <div className={styles["box"]}>
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
            <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi</p>
            <div className={styles["header-btn"]}>
              <CommonButton
                text="Discover More"
                type="primary"
                className={styles["custom-btn"]}
              />
            </div>
          </div>
          <div className={styles["box-two"]}>
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
            <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi</p>
            <div className={styles["header-btn"]}>
              <CommonButton
                text="Discover More"
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

export default ServiceSection;
