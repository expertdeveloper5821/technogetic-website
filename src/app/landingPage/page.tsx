// "use client";
// import Header from "@/components/commonComponents/header";
// import React from "react";
// import BannerSection from "./bannerSection/page";
// import Footer from "@/components/commonComponents/footer";
// import styles from "./styles.module.scss";
// import AboutSection from "./aboutSection/page";
// import ServiceSection from "./serviceSection/page";
// import ClientSection from "./clientSection/page";
// import WorkSection from "./workSection/page";
// import Testimonial from "./testimonialsSection/page";
// import JoinUs from "./joinUsSection/page";
// import Blog from "./blogSection/page";
// import Head from "next/head";
// // import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";

// const LandingPage = () => {
//   return (
//     <>
//       <Head>
//         <title>Home | Technogetic</title>
//         <meta
//           name="description"
//           content="This is the meta description for My Page"
//         />
//       </Head>
//       <div>
//         <div className={styles["main-section"]}>
//           <Header />
//           <BannerSection />
//         </div>
//         {/* <HorizontalScroll> */}
//           <AboutSection />
//           <ServiceSection />
//           <ClientSection />
//           <WorkSection />
//           <Testimonial />
//           <JoinUs />
//           <Blog />
//           <Footer />
//         {/* </HorizontalScroll> */}
//       </div>
//     </>
//   );
// };

// export default LandingPage;
"use client";
import { useEffect } from 'react';
import gsap, { ScrollTrigger } from 'gsap/all';

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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// Register all GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-trigger') as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        end: 'bottom 10%',
        once: true,
        onEnter: () => {
          gsap.to(element, { opacity: 1, y: 0, duration: 1 });
        },
        onLeaveBack: () => {
          gsap.to(element, { opacity: 0, y: -50, duration: 1 });
        },
      });
    });
  }, []);

  return (
    <>
    <ToastContainer />
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
        <AboutSection className="scroll-trigger" />
        <ServiceSection className="scroll-trigger" />
        <ClientSection className="scroll-trigger" />
        <WorkSection className="scroll-trigger" />
        <Testimonial className="scroll-trigger" />
        <JoinUs className="scroll-trigger" />
        <Blog className="scroll-trigger" />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
