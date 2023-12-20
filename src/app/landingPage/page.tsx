"use client";
import { useEffect, useState } from 'react';
import gsap, { ScrollTrigger } from 'gsap/all';

import Header from "@/components/commonComponents/header";
import React from "react";
import BannerSection from "../../components/landingPage/bannerSection/page";
import Footer from "@/components/commonComponents/footer";
import styles from "./styles.module.scss";
import AboutSection from "../../components/landingPage/aboutSection/page";
import ServiceSection from "../../components/landingPage/serviceSection/page";
import ClientSection from "../../components/landingPage/clientSection/page";
import WorkSection from "../../components/landingPage/workSection/page";
import Testimonial from "../../components/landingPage/testimonialsSection/page";
import JoinUs from "../../components/landingPage/joinUsSection/page";
import Blog from "../../components/landingPage/blogSection/page";
import Head from "next/head";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';
import { getDataById } from '@/utils/api';
import { useRouter } from 'next/router';

interface LandingPageProps {
  pageProps: any; // Adjust the type based on your actual pageProps structure
  router: any; // Adjust the type based on your actual router structure
}

interface RouteParams {
  pageIdFromRoute: string;
}


gsap.registerPlugin(ScrollTrigger);

const LandingPage: React.FC<{ data: any }> = ({ data }) => {
 
  useEffect(() => {    
    // const handleScroll = debounce(() => {
      const elements = document.querySelectorAll('.scroll-trigger') as NodeListOf<HTMLElement>;

      elements.forEach((element) => {
        ScrollTrigger.create({
          trigger: element,
          start: 'top 80%',
          end: 'bottom 10%',
          once: true,
          // onEnter: () => {
          //   gsap.to(element, { opacity: 1, y: 0, duration: 1 });
          // },
          // onLeaveBack: () => {
          //   gsap.to(element, { opacity: 0, y: -50, duration: 1 });
          // },
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
      <AnimatePresence mode='wait'>

      
      <div>
        <div className={styles["main-section"]}>
          <Header />
          <BannerSection title={''} description={''} sectionsImages={[]} />
        </div>
        <AboutSection className="scroll-trigger" text="Your about section text goes here." maxLength={100} title={''} subTitle={''} description={''} shortDescription={''} sectionsImages={[]} />
        <ServiceSection className="scroll-trigger" />
        <ClientSection className="scroll-trigger" />
        <WorkSection className="scroll-trigger" />
        <Testimonial className="scroll-trigger" />
        <JoinUs className="scroll-trigger" />
        <Blog className="scroll-trigger" />
        <Footer />
      </div>
      </AnimatePresence>
    </>
  );
};

export default LandingPage;




