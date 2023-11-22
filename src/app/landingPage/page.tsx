"use client";
import Header from "@/components/commonComponents/header";
import React from "react";
import BannerSection from "./bannerSection/page";
import Footer from "@/components/commonComponents/footer";
import styles from "./styles.module.scss";
import AboutSection from "./aboutSection/page";
import ServiceSection from "./serviceSection/page";
import ClientSection from "./clientSection/page";
import WorkSection from "./workSection/page";
import Testimonial from "./testimonialsSection/page";
import JoinUs from "./joinUsSection/page";
import Blog from "./blogSection/page";
import Head from "next/head";
// import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Home | Technogetic</title>
        <meta
          name="description"
          content="This is the meta description for My Page"
        />
      </Head>
      <div>
        <div className={styles["main-section"]}>
          <Header />
          <BannerSection />
        </div>
        {/* <HorizontalScroll> */}
          <AboutSection />
          <ServiceSection />
          <ClientSection />
          <WorkSection />
          <Testimonial />
          <JoinUs />
          <Blog />
          <Footer />
        {/* </HorizontalScroll> */}
      </div>
    </>
  );
};

export default LandingPage;
