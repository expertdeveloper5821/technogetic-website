import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

const ClientSection = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["container"]}>
        <div className={styles["client-title"]}>
          <h5>Over 25k+ software businesses growing with Solvero</h5>
        </div>
        <div className={styles["client-logo"]}>
          <div className={styles["section-one"]}>
            <Image
              src="/assets/client/c1.png"
              alt="logo"
              width={100}
              height={30}
            />
            <Image
              src="/assets/client/c2.png"
              alt="logo"
              width={100}
              height={30}
            />
          </div>
          <div className={styles["section-two"]}>
          <Image
            src="/assets/client/c3.png"
            alt="logo"
            width={100}
            height={30}
          />
          <Image
            src="/assets/client/c4.png"
            alt="logo"
            width={100}
            height={30}
          />
          </div>
          <div className={styles["section-three"]}>
          <Image
            src="/assets/client/c5.png"
            alt="logo"
            width={100}
            height={30}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
