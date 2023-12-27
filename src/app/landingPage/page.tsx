"use client";
import React, { useEffect, useState } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import Header from "@/components/commonComponents/header";
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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { fetchDataById } from "@/utils/api";
import { useRouter } from "next/router";

gsap.registerPlugin(ScrollTrigger);
interface ApiResponse {
  metaDetails?: {
    title: string;
    description: string;
    // Add other properties as needed
  };
  sections?: {
    title: string;
    subTitle: string;
    description: string;
    shortDescription: string;
    // sectionsImages: [];
  }[];
  // Add other properties as needed
}
// Define LandingPage component
const LandingPage = () => {
  const router = useRouter();
  const { pageId } = router.query as { pageId: string }; 
  // const [apiData, setApiData] = useState(null);
  const [apiData, setApiData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    // const apiUrl = `http://localhost:3000/api/getPagesById?pageId=658bac1040d72c4af5267c5e`;

    // axios
    //   .get(apiUrl)
    //   .then((response) => {
    //     console.log("API Response:", response);
    //     setApiData(response.data.data);
    //     console.log("API Data:", response.data.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
    const fetchData = async () => {
      try {
        if (pageId && typeof pageId === 'string') {
          const data = await fetchDataById<ApiResponse>(pageId);
          setApiData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    

    const elements = document.querySelectorAll(
      ".scroll-trigger"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        end: "bottom 10%",
        once: true,
      });
    });
    fetchData();
  }, [pageId]);

  if (!apiData) {
    return <div>Loading...</div>;
  }

  console.log("apiData", apiData);

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
          {/* Pass dynamic data to BannerSection */}
          <BannerSection
            title={apiData.sections?.[0]?.title || ""}
            description={apiData.sections?.[0]?.shortDescription || ""}
            sectionsImages={
              apiData.sections && apiData.sections.length > 0
                ? apiData.sections[0].sectionsImages || []
                : []
            }
          />
        </div>
        <AboutSection
          className="scroll-trigger"
          maxLength={100}
          title={apiData.sections?.[1]?.title || ""}
          subTitle={apiData.sections?.[1]?.subTitle || ""}
          description={apiData.sections?.[1]?.description || ""}
          shortDescription={apiData.sections?.[1]?.shortDescription || ""}
           sectionsImages={
            apiData.sections && apiData.sections.length > 0
              ? apiData.sections[1].sectionsImages || []
              : []
            }
        />
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

