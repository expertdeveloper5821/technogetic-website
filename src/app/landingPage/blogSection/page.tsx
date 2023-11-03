import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import CommonButton from "@/components/buttonComponent/page";

const Blog = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["testimonial-section"]}>
        <div className={styles["container"]}>
          <div className={styles["main-head"]}>
            <h6>Blog</h6>
            <h1>Latest Blog & News</h1>
            <p>
              Commodo elementum, sed imperdiet nunc euismod etiam aliquet
              viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis
              magna facilisi
            </p>
          </div>
          <div className={styles["work-btn"]}>
            <div className={styles["header-btn"]}>
              <CommonButton
                text="View All Blog"
                type="primary"
                className={styles["work-button"]}
              />
            </div>
          </div>
        </div>
        <div className={styles["services"]}>
          <div className={styles["services-box"]}>
            <div className={styles["box"]}>
              <Image
                src="/assets/blog/b1.jpg"
                width={0}
                height={0}
                layout="responsive"
                objectFit="contain"
                alt="blog one"
              />
            </div>
            <div className={styles["blog-details"]}>
                <h5>Purus porta feugiats dia sed ipsum enim gravida lectus.</h5>
                <p>September 10, 2022 <span>No Comments</span></p>
            </div>
          </div>
          <div className={styles["services-box"]}>
            <div className={styles["box"]}>
              <Image
                src="/assets/blog/b2.jpg"
                width={0}
                height={0}
                layout="responsive"
                objectFit="contain"
                alt="blog one"
              />
            </div>
            <div className={styles["blog-details"]}>
                <h5>Purus porta feugiats dia sed ipsum enim gravida lectus.</h5>
                <p>September 10, 2022 <span>No Comments</span></p>
            </div>
          </div>
          <div className={styles["services-box"]}>
            <div className={styles["box"]}>
              <Image
                src="/assets/blog/b3.jpg"
                width={0}
                height={0}
                layout="responsive"
                objectFit="contain"
                alt="blog one"
              />
            </div>
            <div className={styles["blog-details"]}>
                <h5>Purus porta feugiats dia sed ipsum enim gravida lectus.</h5>
                <p>September 10, 2022 <span>No Comments</span></p>
            </div>
          </div>
          <div className={styles["services-box"]}>
            <div className={styles["box"]}>
              <Image
                src="/assets/blog/b4.jpg"
                width={0}
                height={0}
                layout="responsive"
                objectFit="contain"
                alt="blog one"
              />
            </div>
            <div className={styles["blog-details"]}>
                <h5>Purus porta feugiats dia sed ipsum enim gravida lectus.</h5>
                <p>September 10, 2022 <span>No Comments</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
