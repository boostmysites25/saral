import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/aboutuscontent.jpg";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Testimonials from "../../componets/common/Testimonials";
import Faqs from "../../componets/common/Faqs";
import Credibility from "../../componets/common/Credibility";
import CommonProject from "../../componets/website/CommonProject";
import SEOHead from "../../components/SEO/SEOHead";
import { seoData } from "../../data/seoData";

const Home = () => {
  return (
    <>
      <SEOHead {...seoData.home} />
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            data-aos-offset={-200}
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              IT Services
            </div>
            <h1 className="heading-1">
              Your <span className="text-primary">AI</span> Partner in
              Transformative Digital Solutions
            </h1>
            <p className="desc">
              Expert AI, RPA, and full-stack app/web development partner in Pune serving global B2B clients. We craft cutting-edge AI-driven IT solutions tailored to meet the evolving needs of businesses, ensuring enhanced efficiency, sustainable growth, and continuous innovation through intelligent automation and data-driven insights.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                Built for Builders. Powered by Passion.
              </h2>
              <p className="desc">
                At SARAL, we’re more than just a tech services firm—we’re your
                product development partners, problem‑solvers, and creative
                collaborators. We work with businesses that are ready to push
                boundaries and build smarter. Our team doesn’t just deliver
                solutions—we dive into your challenges, explore what’s possible,
                and build technology that actually works for your users. Whether
                it’s a brand‑new app, an AI‑powered tool, or a system overhaul,
                we bring a hands‑on, no‑fluff approach to every project.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="h-full max-h-[300px] max-w-[400px] lg:max-w-full  lg:max-h-[382px]"
          >
            <img
              src={aboutUsImg}
              className="h-full rounded-lg w-full mx-auto object-cover"
              alt="About us illustration"
            />
          </div>
        </div>
      </section>

      <OurServices length={3} />
      
     

      {/* Robotic Process Automation Section */}
      <section className="py-[3rem] bg-gray-300 text-white">
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Process Automation
          </div>
          <h2 className="heading-2 bg-gradient-to-r from-blue-900 to-primary bg-clip-text text-transparent">
            Robotic Process Automation (RPA)
          </h2>
          <p className="desc max-w-[50rem] mx-auto !text-black">
            Streamline operations and reduce manual workload with our RPA solutions. We automate repetitive tasks, improve accuracy, and free up your team to focus on strategic initiatives.
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <Link to="/services/rpa" className="text-primary hover:text-secondary transition-colors duration-300 underline">
              RPA Solutions
            </Link>
            <Link to="/contact-us" className="text-primary hover:text-secondary transition-colors duration-300 underline">
              Get RPA Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Web & Mobile App Development Section */}
      <section className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper">
        <div
          data-aos="fade-up"
          className="text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Digital Solutions
          </div>
          <h2 className="heading-2 bg-gradient-to-r from-blue-900 to-primary bg-clip-text text-transparent">
            Web & Mobile App Development
          </h2>
          <p className="desc max-w-[50rem] mx-auto">
            Build powerful web applications and mobile apps that engage users and drive business growth. From concept to deployment, we deliver scalable, user-friendly solutions across all platforms.
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <Link to="/services/web-development" className="text-primary hover:text-secondary transition-colors duration-300 underline">
              Web Development
            </Link>
            <Link to="/services/app-development" className="text-primary hover:text-secondary transition-colors duration-300 underline">
              Mobile App Development
            </Link>
          </div>
        </div>
      </section>

      {/* Industrial IoT & Blockchain Solutions Section */}
      <section className="py-[3rem] bg-gray-300 text-white">
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Emerging Technologies
          </div>
          <h2 className="heading-2 bg-gradient-to-r from-blue-900 to-primary bg-clip-text text-transparent">
            Industrial IoT & Blockchain Solutions
          </h2>
          <p className="desc max-w-[50rem] mx-auto !text-black">
            Leverage the power of IoT and blockchain to create secure, transparent, and efficient systems. Our solutions enable real-time monitoring, smart contracts, and decentralized applications.
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <Link to="/services/blockchain-development" className="text-primary hover:text-secondary transition-colors duration-300 underline">
              Blockchain Development
            </Link>
            <Link to="/blogs" className="text-primary hover:text-secondary transition-colors duration-300 underline">
              IoT & Blockchain Insights
            </Link>
          </div>
        </div>
      </section>

       {/* Custom AI & ML Solutions Section */}
      <section className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper">
        <div
          data-aos="fade-up"
          className="text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            AI & Machine Learning
          </div>
          <h2 className="heading-2 bg-gradient-to-r from-blue-900 to-primary bg-clip-text text-transparent">
            Custom AI & ML Solutions
          </h2>
          <p className="desc max-w-[50rem] mx-auto">
            Transform your business with intelligent automation, predictive analytics, and machine learning solutions. Our AI experts develop custom algorithms and models that drive innovation and competitive advantage.
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <Link to="/services/ai-development" className="text-primary hover:text-secondary transition-colors duration-300 underline">
              AI Development Services
            </Link>
            <Link to="/services/ml-services" className="text-primary hover:text-secondary transition-colors duration-300 underline">
              Machine Learning Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[3rem] bg-gray-300 text-white">
        <div
          data-aos-offset={-400}
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            A Global Team That Feels Local
          </div>
          <h1 className="heading-2 bg-gradient-to-r from-blue-900 max-w-[50rem] mx-auto to-primary bg-clip-text text-transparent">
            We work like we’re right down the hall—no matter where you are.
          </h1>
          <p className="desc max-w-[50rem] mx-auto !text-black">
            We might not be in the same city as our clients—but we work like
            we’re right down the hall. With a remote‑friendly setup, flexible
            hours, and open lines of communication, we make collaboration feel
            easy and natural, no matter where you are.
          </p>
        </div>
      </section>



      <CommonProject />
      
      {/* Client Success Cases Section */}
      <section className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper">
        <div
          data-aos="fade-up"
          className="text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Our Impact
          </div>
          <h2 className="heading-2 bg-gradient-to-r from-blue-900 to-primary bg-clip-text text-transparent">
            Client Success Cases
          </h2>
          <p className="desc max-w-[50rem] mx-auto">
            Discover how we've helped businesses across industries achieve their digital transformation goals. Our proven track record speaks to our commitment to delivering exceptional results and driving measurable business outcomes.
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <Link to="/portfolio" className="text-primary hover:text-secondary transition-colors duration-300 underline">
              View Our Portfolio
            </Link>
            <Link to="/contact-us" className="text-primary hover:text-secondary transition-colors duration-300 underline">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      <Testimonials />
      <Credibility />
      <Faqs />
      {/* <EndlessOpportunitiesSection /> */}
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
