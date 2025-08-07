import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.jpg";
import appLandingAbout from "./assets/images/app-landing-about.jpg";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/aboutusbanner.jpg";
import contactusbanner from "./assets/images/contactusbanner1.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import profileImg1 from "./assets/images/profileimg-1.jpg";
import profileImg2 from "./assets/images/profileimg-2.jpg";
import aboutone from "./assets/images/aboutone.jpg";
import abouttwo from "./assets/images/abouttwo.jpg";
import aboutthree from "./assets/images/aboutthree.jpg";
import aboutfour from "./assets/images/aboutfour.jpg";
import aboutfive from "./assets/images/aboutfive.jpg";
import aboutusintroone from "./assets/images/aboutusintroone.jpg";
import aboutusintrotwo from "./assets/images/aboutusintrotwo.jpg";
import allbgimage from "./assets/images/allbgimage.jpg";
import { lazy } from "react";
import { BiBarChartAlt2, BiBrain, BiBulb, BiRocket } from "react-icons/bi";
import { GoFileMedia, GoGraph } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import {
  MdOutlineChat,
  MdOutlineDashboardCustomize,
  MdOutlineDeveloperMode,
  MdPermMedia,
} from "react-icons/md";

import {
  GiArtificialIntelligence,
  GiBrain,
  GiHistogram,
  GiRobotLeg,
  GiVendingMachine,
} from "react-icons/gi";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import {
  BsBarChartLine,
  BsFillClipboard2DataFill,
  BsLightningChargeFill,
  BsLink45Deg,
} from "react-icons/bs";
import {
  FaAppStoreIos,
  FaCloudUploadAlt,
  FaCode,
  FaDatabase,
  FaFileContract,
  FaGamepad,
  FaLanguage,
  FaPalette,
  FaPhoneAlt,
  FaWallet,
} from "react-icons/fa";
import {
  SiEthereum,
  SiFlutter,
  SiHiveBlockchain,
  SiTensorflow,
} from "react-icons/si";
import { IoLogoAndroid, IoMdCloud, IoMdCloudDone } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { RiCustomSize, RiLineChartLine } from "react-icons/ri";
import { TbDeviceMobileCode } from "react-icons/tb";
import { HiTranslate } from "react-icons/hi";

//service images
import blockchaindevelopment from "./assets/images/services/blockchain-development.jpg";
import gamedevelopment from "./assets/images/services/game-development.jpg";
import aidevelopment from "./assets/images/services/ai-development.jpg";
import appdevelopment from "./assets/images/services/app-development.jpg";
import mlservices from "./assets/images/services/ml-services.jpg";
import rpa from "./assets/images/services/rpa.jpg";
import cloudcomputing from "./assets/images/services/cloud-computing.jpg";
import webdevelopment from "./assets/images/services/web-development.jpg";
import datascience from "./assets/images/services/data-science.jpg";
import nlp from "./assets/images/services/nlp.jpg";
import cloudmigration from "./assets/images/services/cloud-migration.jpg";
import uiuxdesign from "./assets/images/services/ui-ux-design.jpg";
import aicallingagent from "./assets/images/services/ai-calling-agent.jpg";
import { AiOutlineEye } from "react-icons/ai";

//block chaing portfolio

//portfolio

import Blogs from "./pages/website/Blogs";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold-creekcap.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think-reality.png";
import AkashMegaMart from "./assets/web-development-portfolio/Akash-Mega-Mart.png";
import MidwamImmersive from "./assets/web-development-portfolio/Midwam–Immersive-Experience-Design-Company.png";
import Autopilot from "./assets/web-development-portfolio/Autopilot.png";
import FEGroup from "./assets/web-development-portfolio/fegroup.png";
import HugeInc from "./assets/web-development-portfolio/HugeInc.png";
import CodeHelp from "./assets/web-development-portfolio/CodeHelp.png";
import Spray from "./assets/web-development-portfolio/Spray.png";
import ArcaneMirage from "./assets/web-development-portfolio/ArcaneMirage.png";
import MessinaCatering from "./assets/web-development-portfolio/MessinaCatering.png";
import MasterShala from "./assets/web-development-portfolio/MasterShala.png";
import MantraDhwani from "./assets/web-development-portfolio/MantraDhwani.png";

// Import all images at the top (App Development)
import RentopBikeAndCarImgapp from "./assets/app-development-portfolio/Rentop–Bike-&-Car-Rentals.png";
import AkashMegaMartApp from "./assets/app-development-portfolio/Akash-Mega-Mart-Mobile-App.png";
import FeelItMobileApp from "./assets/app-development-portfolio/FeelIt-Mobile-App.png";
import KlikomicsMobileApp from "./assets/app-development-portfolio/Klikomics-Mobile-App.png";
import AutoSnapMobileApp from "./assets/app-development-portfolio/AutoSnap-Mobile-App.png";
import vetlab from "./assets/app-development-portfolio/vetlab.png";
import eva from "./assets/app-development-portfolio/eva.png";
import evansfrancis from "./assets/app-development-portfolio/evansfrancis.png";
import planta from "./assets/app-development-portfolio/planta.png";
import Serviz from "./assets/app-development-portfolio/serviz.png";
import freshandfresh from "./assets/app-development-portfolio/freshandfresh.png";

//portfolio block chain
import nanoflow from "./assets/portfolio/nanoflow.png";
import padipal from "./assets/portfolio/padipal.png";
import cryptopadie from "./assets/portfolio/cryptopadie.png";
import ProjectButterfly from "./assets/portfolio/ProjectButterfly.png";
import Solalgo from "./assets/portfolio/Solalgo.png";
import Taikonz from "./assets/portfolio/Taikonz.png";

//ecommerce portfolio
import Banjaaran from "./assets/ecommerce-portfolio/Banjaaran.png";
import GullyLabs from "./assets/ecommerce-portfolio/GullyLabs.png";
import NickronIndia from "./assets/ecommerce-portfolio/NickronIndia.png";
import OfficialDAPP from "./assets/ecommerce-portfolio/OfficialDAPP.png";

//ai Project
import FindMyAITool from "./assets/aiportfolio/FindMyAITool.png";

//shopify portfolio
import BBBShop from "./assets/shopifyportfolio/BBBShop.png";
import NaseemPerfume from "./assets/shopifyportfolio/NaseemPerfume.png";
import TheEthnicCloset from "./assets/shopifyportfolio/TheEthnicCloset.png";
import Portfolio from "./pages/website/Portfolio";

const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  contactusbanner,
  aboutusintroone,
  aboutusintrotwo,
  allbgimage,
};

// company details
export const companyDetails = {
  name: "SARAL",
  phone: "+91-9029692185",
  whatsapp: "9029692185",
  whatsappbox:
    "https://api.whatsapp.com/send/?phone=9029692185&text&type=phone_number&app_absent=0",
  email: "contact@saral-labs.com",
  address: "T5-3rd floor, The Highlands, Forest Trails, Bhugaon, Pune 412115",
  linkedin: "https://www.linkedin.com/company/sarallabs/",
  instagram: "https://www.instagram.com/saral_labs/",
  x: "https://x.com/Saral_labs",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Blogs",
    path: "/blogs",
    component: <Blogs />,
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    component: <Portfolio />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is the typical timeline for an AI project?",
    answer:
      "AI project timelines typically range from 8-16 weeks depending on complexity. Simple AI integrations take 8-10 weeks, while complex machine learning models with custom algorithms can take 12-16 weeks. We provide detailed project roadmaps and regular updates throughout the development process.",
  },
  {
    id: 2,
    question: "Do you provide RPA bots for finance and logistics?",
    answer:
      "Yes, we specialize in RPA solutions for finance and logistics sectors. Our bots automate invoice processing, expense management, inventory tracking, order fulfillment, and supply chain operations. We've successfully implemented RPA solutions that reduce manual work by 70-80% while improving accuracy.",
  },
  {
    id: 3,
    question: "Can I upgrade my existing app with Saral Labs?",
    answer:
      "Absolutely! We offer app modernization and upgrade services. Whether you need to add new features, improve performance, integrate AI capabilities, or migrate to newer technologies, our team can enhance your existing application while maintaining data integrity and user experience.",
  },
  {
    id: 4,
    question: "What services do you offer?",
    answer:
      "We offer full-cycle development services including AI & ML solutions, RPA automation, web development, mobile app development, blockchain solutions, data science, cloud computing, UI/UX design, and more—tailored to your business needs.",
  },
  {
    id: 5,
    question: "How do you ensure project success?",
    answer:
      "We offer end-to-end support, transparent timelines, and collaborative communication. Plus, our solutions are built with scalability, usability, and performance at their core. We follow agile methodologies with regular client check-ins and milestone reviews.",
  },
  {
    id: 6,
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance monitoring, bug fixes, and feature enhancements. We also provide 24/7 technical support for critical applications.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    img: <CgWebsite />,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: <GoFileMedia />,
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: <TfiLayoutMediaRightAlt />,
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: <MdOutlineDashboardCustomize />,
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: <FaAppStoreIos />,
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: <IoLogoAndroid />,
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: <SiFlutter />,

    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: <TbDeviceMobileCode />,
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

export const landingPageServicesDetails = [
  {
    id: 1,
    title: "AI Development",
    link: "ai-development",
    Heading: "Innovative AI Solutions to Drive Business Transformation",
    Paragraph: `Leverage cutting-edge artificial intelligence to automate processes, enhance decision-making, and deliver personalized customer experiences. Our AI development services are designed to empower your business with intelligent solutions that foster growth and efficiency.`,
    serviceList: [
      {
        id: 1,
        title: "AI-Powered Chatbots",
        img: <MdOutlineChat />,
        description:
          "Enhance customer engagement with intelligent chatbots that provide real-time support, automate responses, and learn from interactions to improve over time.",
      },
      {
        id: 2,
        title: "Predictive Analytics",
        img: <RiLineChartLine />,
        description:
          "Leverage data-driven insights to forecast trends, customer behaviors, and market dynamics, enabling proactive decision-making and strategic planning.",
      },
      {
        id: 3,
        title: "Natural Language Processing (NLP)",
        img: <FaLanguage />,
        description:
          "Implement NLP solutions to analyze and interpret human language, facilitating sentiment analysis, language translation, and content summarization.",
      },
      {
        id: 4,
        title: "Computer Vision",
        img: <AiOutlineEye />,
        description:
          "Integrate computer vision technologies to enable image and video analysis, object detection, and facial recognition for various applications.",
      },
    ],
  },
  {
    id: 2,
    title: "Data Science",
    link: "data-science",
    Heading: "Data-Driven Strategies for Informed Decision-Making",
    Paragraph: `Transform raw data into actionable insights with our comprehensive data science services. By combining statistical analysis, machine learning, and domain expertise, we help you uncover patterns and trends that inform strategic decisions and drive business success.​`,
    serviceList: [
      {
        id: 1,
        title: "Data Visualization",
        img: <BiBarChartAlt2 />,
        description:
          "Transform complex data sets into intuitive visual representations, aiding in the discovery of patterns, trends, and actionable insights.",
      },
      {
        id: 2,
        title: "Machine Learning Models",
        img: <SiTensorflow />,
        description:
          "Develop and deploy machine learning models tailored to your business needs, enabling automation and predictive capabilities.",
      },
      {
        id: 3,
        title: "Big Data Processing",
        img: <FaDatabase />,
        description:
          "Handle vast volumes of data efficiently, ensuring scalability and performance in data storage, processing, and analysis.",
      },
      {
        id: 4,
        title: "Statistical Analysis",
        img: <GiHistogram />,
        description:
          "Apply statistical methods to interpret data, test hypotheses, and support data-driven decision-making processes.",
      },
    ],
  },
  {
    id: 3,
    title: "Blockchain Development",
    link: "blockchain-development",
    Heading: "Secure and Transparent Blockchain Solutions for the Future",
    Paragraph: `Embrace the power of blockchain technology to enhance security, transparency, and efficiency in your operations. Our blockchain development services offer decentralized solutions tailored to your business needs, ensuring trust and integrity in every transaction.`,
    serviceList: [
      {
        id: 1,
        title: "Smart Contract Development",
        img: <FaFileContract />,
        description:
          "Design and deploy self-executing smart contracts that automate transactions and enforce agreements without intermediaries.",
      },
      {
        id: 2,
        title: "Decentralized Applications (DApps)",
        img: <SiEthereum />,
        description:
          "Build decentralized applications that run on blockchain networks, offering transparency, security, and user autonomy.",
      },
      {
        id: 3,
        title: "Blockchain Integration",
        img: <BsLink45Deg />,
        description:
          "Integrate blockchain technology into existing systems to enhance data integrity, traceability, and operational efficiency.",
      },
      {
        id: 4,
        title: "Cryptocurrency Wallets",
        img: <FaWallet />,
        description:
          "Develop secure and user-friendly cryptocurrency wallets, enabling safe storage and management of digital assets.",
      },
    ],
  },
];

export const dataScienceServices = [
  {
    id: 1,
    title: "Data Visualization",
    // icon: require("./assets/images/icons/data-visualization.png"),
    img: <BiBarChartAlt2 />,
    description:
      "Transform complex data sets into intuitive visual representations, aiding in the discovery of patterns, trends, and actionable insights.",
  },
  {
    id: 2,
    title: "Machine Learning Models",
    // // icon: require("./assets/images/icons/machine-learning.png"),
    img: <SiTensorflow />,
    description:
      "Develop and deploy machine learning models tailored to your business needs, enabling automation and predictive capabilities.",
  },
  {
    id: 3,
    title: "Big Data Processing",
    // // icon: require("./assets/images/icons/big-data.png"),
    img: <FaDatabase />,
    description:
      "Handle vast volumes of data efficiently, ensuring scalability and performance in data storage, processing, and analysis.",
  },
  {
    id: 4,
    title: "Statistical Analysis",
    // // icon: require("./assets/images/icons/statistics.png"),
    img: <GiHistogram />,
    description:
      "Apply statistical methods to interpret data, test hypotheses, and support data-driven decision-making processes.",
  },
];

export const blockchainDevelopmentServices = [
  {
    id: 1,
    title: "Smart Contract Development",
    // icon: require("./assets/images/icons/smart-contract.png"),
    img: <FaFileContract />,
    description:
      "Design and deploy self-executing smart contracts that automate transactions and enforce agreements without intermediaries.",
  },
  {
    id: 2,
    title: "Decentralized Applications (DApps)",
    // // icon: require("./assets/images/icons/dapp.png"),
    img: <SiEthereum />,
    description:
      "Build decentralized applications that run on blockchain networks, offering transparency, security, and user autonomy.",
  },
  {
    id: 3,
    title: "Blockchain Integration",
    // // icon: require("./assets/images/icons/blockchain-integration.png"),
    img: <BsLink45Deg />,
    description:
      "Integrate blockchain technology into existing systems to enhance data integrity, traceability, and operational efficiency.",
  },
  {
    id: 4,
    title: "Cryptocurrency Wallets",
    // // icon: require("./assets/images/icons/crypto-wallet.png"),
    img: <FaWallet />,
    description:
      "Develop secure and user-friendly cryptocurrency wallets, enabling safe storage and management of digital assets.",
  },
];

export const allServices = [
  {
    id: 1,
    img: <SiHiveBlockchain className="w-6 h-6" />,
    image: blockchaindevelopment,
    path: "blockchain-development",
    link: "/services/blockchain-development",
    title: "Blockchain Development",
    desc: "Secure by design. Built to scale. We develop blockchain solutions that bring clarity and trust to your business, creating secure systems for smart contracts and digital asset platforms. Our expertise spans Ethereum, Hyperledger, and custom protocols, delivering transparent and immutable record-keeping with enterprise-grade security standards and reliable performance even under high transaction loads.",
    detailContent:
      "We develop comprehensive blockchain solutions that bring clarity, trust, and innovation to your business operations. Whether you're building with Ethereum, Hyperledger, or custom protocols, we create secure, scalable systems for everything from smart contracts to digital asset platforms. Our team of specialized blockchain developers combines cryptographic expertise with deep industry knowledge to deliver solutions that maintain integrity while meeting your specific business requirements. Our services support a wide range of blockchain applications including decentralized apps (dApps) that operate without central authorities, secure crypto wallets and exchanges with robust transaction capabilities, private blockchain solutions for enterprise environments requiring controlled access, and sophisticated NFT and tokenization platforms that transform digital and physical assets into verifiable tokens. We specialize in various blockchain frameworks and consensus mechanisms, ensuring the right technical approach for your use case, with an unwavering focus on security, transparency, and scalability. From proof-of-concept to enterprise-wide implementation, we provide end-to-end development services that include smart contract auditing, tokenomics design, integration with existing systems, and ongoing technical support.",
  },
  {
    id: 2,
    img: <FaGamepad className="w-6 h-6" />,
    image: gamedevelopment,
    path: "game-development",
    link: "/services/game-development",
    title: "Game Development",
    desc: "Games people want to play—and keep playing. We design interactive experiences with strong storytelling, smooth performance, and striking visuals across mobile and cross-platform environments. Our games feature intuitive controls, balanced progression systems, and engaging mechanics that keep players coming back for more, whether they're casual puzzles or immersive adventures with rich worlds to explore.",
    detailContent:
      "We transform creative concepts into engaging, captivating games through comprehensive full-cycle development services. From addictive mobile puzzle games to ambitious cross-platform action adventures, our specialized game studio handles every aspect including character design, immersive storytelling, and detailed gameplay mechanics. We combine cutting-edge animation techniques, rigorous QA testing protocols, and performance optimization across all target platforms to create games that truly resonate with players and stand out in competitive marketplaces. Our extensive services include concept development with market analysis and target audience profiling, AI-enhanced rapid prototyping to test core mechanics and engagement factors, sophisticated asset creation including 3D modeling and animation, cross-platform development using Unity and Unreal Engine, and comprehensive post-launch support to keep players engaged through updates and community management. We work closely with you through every development phase, ensuring your game maintains its creative vision while incorporating essential features for player retention and monetization. Whether you need a casual mobile experience or an ambitious PC/console title, our team delivers polished, professional games that capture players' imagination and keep them coming back for more.",
  },
  {
    id: 3,
    img: <GiArtificialIntelligence className="w-6 h-6" />,
    image: aidevelopment,
    link: "/services/ai-development",
    path: "ai-development",
    title: "AI Development",
    desc: "Intelligent tech that actually delivers real business value. We create custom AI solutions for workflow automation, smart assistants, and industry-specific challenges. Our machine learning models integrate seamlessly with your existing systems, continuously improving through operational feedback while maintaining high accuracy and performance across diverse datasets and real-world conditions.",
    detailContent:
      "We develop sophisticated AI solutions that transform business operations through advanced predictive systems, intelligent chatbots with natural language understanding, and computer vision applications. Our comprehensive AI services include AI-driven automation that streamlines workflows and reduces manual intervention, image recognition systems that can identify objects, faces, and patterns with remarkable accuracy, and smart assistant development with contextual awareness tailored specifically to your industry goals and customer needs. We implement adaptive solutions that learn and evolve from interactions and data, helping you optimize processes, enhance decision-making capabilities, and create intelligent workflows that continuously improve over time. Our team leverages the latest advancements in deep learning, neural networks, and natural language processing to build systems that can understand complex patterns, make accurate predictions, and deliver actionable insights from structured and unstructured data sources. We prioritize explainable AI approaches that provide transparency into how decisions are made, allowing stakeholders to understand and trust the technology. From initial concept and data strategy through deployment and ongoing refinement, we create AI solutions that deliver tangible ROI by automating repetitive tasks, uncovering hidden opportunities, and enabling your organization to make faster, more informed decisions in increasingly complex business environments.",
  },
  {
    id: 4,
    img: <MdOutlineDeveloperMode className="w-6 h-6" />,
    image: appdevelopment,
    path: "app-development",
    link: "/services/app-development",
    title: "App Development",
    desc: "Mobile and web apps that get it done with exceptional performance. We create fast, secure, and scalable solutions across platforms with user-centric design principles at their core. Our applications feature responsive interfaces, offline functionality where appropriate, streamlined user journeys, and robust backend systems that handle complex operations while maintaining speed and reliability even under heavy loads.",
    detailContent:
      "We build powerful, feature-rich native Android and iOS applications alongside versatile cross-platform solutions using cutting-edge frameworks like Flutter and React Native. Our comprehensive development process focuses intensely on security best practices, scalability for future growth, and seamless backend integrations with your existing business systems. From initial concept development to final deployment and beyond, we create applications that deliver exceptional user experiences while meeting the strictest performance standards and business requirements. Our extensive services include custom web application development with responsive designs that work flawlessly across all devices, robust API integrations that connect your app to third-party services and data sources, comprehensive testing across multiple devices and operating systems to ensure consistent quality, and ongoing maintenance support with regular updates to keep your application secure and compatible with evolving platform requirements. We employ agile methodologies that allow for frequent client feedback and flexible adaptation throughout the development lifecycle. Our team of experienced developers, UI/UX specialists, and quality assurance professionals works collaboratively to ensure your application not only meets but exceeds user expectations while providing a solid foundation for your digital strategy. Whether you need an enterprise business application, consumer-facing mobile app, or complex web portal, we deliver solutions that combine technical excellence with intuitive user experiences.",
  },
  {
    id: 5,
    img: <GiBrain className="w-6 h-6" />,
    image: mlservices,
    path: "ml-services",
    link: "/services/ml-services",
    title: "Machine Learning Services",
    desc: "Turn data into smarter, actionable decisions. We build sophisticated ML models that predict trends, automate complex processes, and reveal actionable insights hidden in your data. Our solutions adapt to changing patterns, incorporate multivariate analysis techniques, and deliver consistently reliable outputs with clear confidence metrics, enabling data-driven decision making across your organization.",
    detailContent:
      "We develop advanced machine learning solutions including personalized recommendation engines that boost engagement and sales, forecasting tools that predict market trends and customer behavior with remarkable accuracy, and anomaly detection systems that identify unusual patterns before they become problems. Our specialized team creates predictive models that analyze complex customer behavior patterns, optimize supply chains for maximum efficiency, and personalize user experiences across digital touchpoints. Using powerful frameworks like TensorFlow, PyTorch, and scikit-learn, we build highly adaptive ML systems that continuously evolve with your growing data assets, helping you maintain competitive advantage through sophisticated data-driven decision making. Our machine learning development process begins with comprehensive data assessment and preparation, ensuring your models are built on clean, representative information. We employ feature engineering to extract maximum value from available data and utilize cross-validation techniques to validate model performance before deployment. We offer both supervised learning approaches for tasks with defined outcomes and unsupervised learning for discovering hidden patterns in your data. Our solutions include computer vision systems for image recognition, natural language processing for text analysis, and reinforcement learning for sequential decision problems. We provide clear model interpretability features so stakeholders can understand how decisions are being made, and we implement robust monitoring systems to track performance over time, ensuring your machine learning investments continue delivering value as your business evolves.",
  },
  {
    id: 6,
    img: <GiRobotLeg className="w-6 h-6" />,
    image: rpa,
    path: "rpa",
    link: "/services/rpa",
    title: "Robotic Process Automation (RPA)",
    desc: "Let bots handle the busywork with unmatched efficiency. Automate repetitive tasks with precision to boost accuracy and reduce operational costs significantly. Our RPA solutions operate 24/7 with consistent performance, integrate with your existing software ecosystem without major modifications, and provide detailed audit trails for every automated process, freeing your team to focus on creative and strategic initiatives.",
    detailContent:
      "We implement comprehensive RPA solutions for data entry across multiple systems, invoice processing with intelligent data extraction, and complex system integrations that previously required manual intervention. Our AI-powered bots work tirelessly 24/7 to streamline operations, minimize human error, and free your valuable team members for strategic work that requires human creativity and judgment. Using industry-leading tools like UiPath, Automation Anywhere, and Blue Prism, we create custom automation workflows that seamlessly integrate with your existing systems and processes without requiring significant infrastructure changes. Our RPA implementation comes complete with advanced monitoring tools and continuous optimization protocols to ensure maximum efficiency and adaptability as your business requirements evolve. Our approach begins with process assessment and selection, identifying high-value automation candidates through detailed ROI analysis. We design intelligent bots that can handle both structured and unstructured data, make decisions based on predefined rules, and adapt to minor changes in process or interface. Our solutions feature exception handling protocols that flag unusual cases for human review, comprehensive audit trails for compliance and process improvement, and centralized control rooms for monitoring all automated processes across your organization. We provide thorough documentation and knowledge transfer to ensure your team can manage and maintain the automation ecosystem, and we offer ongoing support services to handle updates, expansions, and optimization. From simple task automation to complex, enterprise-wide digital workforce deployment, our RPA solutions deliver immediate efficiency gains while setting the foundation for broader digital transformation initiatives.",
  },
  {
    id: 7,
    img: <IoMdCloud className="w-6 h-6" />,
    image: cloudcomputing,
    path: "cloud-computing",
    link: "/services/cloud-computing",
    title: "Cloud Computing Services",
    desc: "Reliable infrastructure with room to grow on demand. We build secure, high-performance cloud environments on AWS, Azure, and Google Cloud with redundant systems and disaster recovery capabilities. Our cloud solutions feature auto-scaling to handle traffic spikes efficiently, granular access controls to protect sensitive resources, and comprehensive monitoring that provides visibility across your entire infrastructure.",
    detailContent:
      "We design sophisticated, scalable cloud architectures with seamless DevOps integration and automated CI/CD pipelines that accelerate your development cycle. Our comprehensive cloud services include serverless application development that minimizes infrastructure management, resource optimization that balances performance with cost-efficiency, and hybrid cloud solutions that integrate on-premises systems with cloud resources for maximum flexibility. From initial environment setup to ongoing management and optimization, we ensure exceptionally high availability, strict cost control mechanisms, and seamless scaling capabilities to support your business growth trajectory and evolving technical requirements. Our cloud implementation process begins with thorough assessment of your current infrastructure and future needs, followed by architecture design that incorporates security best practices and compliance requirements from the ground up. We implement infrastructure-as-code principles for consistent, repeatable deployments across environments and establish comprehensive monitoring systems that provide real-time visibility into performance metrics, security events, and cost factors. Our team configures automated backup systems with validated recovery procedures and implements multi-region redundancy for mission-critical applications. We provide detailed documentation of all cloud resources and configurations, along with knowledge transfer sessions to enhance your team's cloud capabilities. Our ongoing management services include security patch management, performance optimization, and regular architecture reviews to identify improvement opportunities. Whether you're making your first move to the cloud or optimizing an existing cloud infrastructure, our solutions provide the reliability, security, and scalability necessary for modern digital operations.",
  },
  {
    id: 8,
    img: <FaCode className="w-6 h-6" />,
    image: webdevelopment,
    path: "web-development",
    link: "/services/web-development",
    title: "Web Development",
    desc: "Your digital presence, done right with precision and impact. We build fast, responsive websites that make strong first impressions and convert visitors into customers. Our web solutions feature optimized performance scores, accessible interfaces compliant with WCAG standards, search engine friendly architecture, and content management systems that make updates simple for your team.",
    detailContent:
      "We create professional corporate websites, feature-rich eCommerce platforms, and sophisticated web portals with seamless CMS integration for easy content management. Our comprehensive development process emphasizes mobile responsiveness across all device types, thorough SEO optimization from the ground up, and intuitive user journeys that guide visitors toward conversion goals. Our extensive web services include custom dashboard development with data visualization components, secure payment gateway integration with multiple provider options, and ongoing performance monitoring that ensures your site maintains optimal speed and reliability. We begin each project with detailed requirements gathering and competitive analysis to position your web presence effectively. Our designers create wireframes and prototypes that allow stakeholders to visualize the final product before development begins. We build with clean, maintainable code using modern frameworks like React, Vue, or Angular for frontend development and robust backend technologies like Node.js, Python, or PHP, depending on your specific requirements. Our quality assurance process includes cross-browser testing, security vulnerability assessments, performance optimization, and accessibility compliance checks. After launch, we provide comprehensive analytics implementation to track user behavior and conversion metrics, allowing for data-driven improvements. We offer various support and maintenance packages to keep your website secure, up-to-date, and continuously improving based on user feedback and business goals. Whether you need a simple corporate site or a complex web application with custom functionality, our development team delivers solutions that combine visual appeal with technical excellence.",
  },
  {
    id: 9,
    img: <BsBarChartLine className="w-6 h-6" />,
    image: datascience,
    path: "data-science",
    link: "/services/data-science",
    title: "Data Science Services",
    desc: "Find the story your data is trying to tell and leverage it for business advantage. Transform raw information into actionable business intelligence with advanced statistical methods and visualization techniques. Our data solutions integrate information from disparate sources, identify meaningful patterns invisible to casual analysis, and present insights through intuitive dashboards that make complex data accessible to decision-makers.",
    detailContent:
      "We build robust data pipelines, efficient ETL processes, and interactive real-time analytics dashboards that transform raw data into strategic assets. Our comprehensive solutions include customizable KPI tracking systems that monitor critical business metrics, sophisticated predictive modeling that forecasts future trends, and powerful big data analysis capabilities that handle massive datasets with ease. We help organizations uncover valuable patterns in both structured and unstructured data sources, providing clear, compelling visualizations and actionable insights that drive strategic decision-making across all levels of your business. Our data science approach begins with thorough data discovery and quality assessment to ensure we're building on reliable information. We implement data governance frameworks that maintain consistency and security throughout your data ecosystem. Our team creates automated data processing pipelines that cleanse, transform, and integrate information from multiple sources, preparing it for analysis and reporting. We develop custom algorithms and statistical models tailored to your specific business questions and apply machine learning techniques to uncover complex relationships within your data. Our visualization specialists create intuitive dashboards and reports that make insights accessible to both technical and non-technical stakeholders. We provide data storytelling services that combine analytical findings with business context to drive organizational understanding and buy-in. Our solutions include both historical analysis to understand past performance and predictive capabilities to inform future strategy. Whether you need to optimize operations, understand customer behavior, or identify new market opportunities, our data science services convert your information assets into competitive advantage.",
  },
  {
    id: 10,
    img: <HiTranslate className="w-6 h-6" />,
    image: nlp,
    path: "nlp",
    link: "/services/nlp",
    title: "Natural Language Processing (NLP)",
    desc: "Machines that understand language with remarkable accuracy. Bridge the gap between people and systems with advanced text analysis capabilities that comprehend context, sentiment, and intent. Our NLP solutions process written and spoken language naturally, extract key information from documents automatically, and enable conversational interfaces that make technology more accessible to everyone.",
    detailContent:
      "We develop sophisticated NLP solutions for intelligent chatbots with contextual awareness, nuanced sentiment analysis that captures audience emotions, and automated document processing that extracts key information from unstructured text. Our comprehensive services include powerful language translation systems supporting multiple languages, accurate text classification engines for content categorization, and natural voice interface development that enables hands-free interaction with digital systems. Using state-of-the-art language models and neural network architectures, we create advanced tools that extract meaningful insights, summarize lengthy content effectively, and enable truly natural human-machine interactions across multiple communication channels. Our NLP implementation process begins with linguistic needs assessment to determine the specific language challenges your organization faces. We build custom language models tailored to your industry terminology and communication patterns, enhancing accuracy for domain-specific applications. Our solutions incorporate entity recognition capabilities that identify people, organizations, dates, and custom entities within text, along with relationship extraction to understand connections between identified entities. We develop topic modeling systems that automatically categorize documents by subject matter and implement semantic search capabilities that understand user intent beyond keywords. Our sentiment analysis tools detect subtle emotional tones and opinion polarity in customer feedback, social media, and other text sources. For conversational AI applications, we create dialogue management systems that maintain context across multi-turn conversations and handle clarification questions naturally. Whether you need to process large document collections, understand customer feedback at scale, or create conversational interfaces for your products, our NLP services bring human-like language understanding to your digital systems.",
  },
  {
    id: 11,
    img: <FaCloudUploadAlt className="w-6 h-6" />,
    image: cloudmigration,
    path: "cloud-migration",
    link: "/services/cloud-migration",
    title: "Cloud Migration Services",
    desc: "Seamless transitions to the cloud with minimal business disruption. We handle legacy system migration with zero downtime and complete data integrity. Our migration strategies include thorough pre-migration assessments, phased implementation approaches to minimize risk, comprehensive testing protocols to validate functionality, and detailed documentation that preserves institutional knowledge throughout the transformation process.",
    detailContent:
      "Our comprehensive end-to-end migration process includes thorough infrastructure assessment that evaluates existing systems and dependencies, carefully planned workload transfer that minimizes disruption to business operations, and extensive post-migration optimization that ensures you're getting maximum value from cloud resources. We specialize in complex application refactoring that modernizes legacy code for cloud environments, secure data migration with verification and validation protocols, and sophisticated hybrid cloud setups that maintain connections between on-premises and cloud systems. With rigorous testing methodologies throughout the migration journey, we ensure uncompromising security standards and enhanced performance while modernizing your critical IT infrastructure. Our migration approach begins with detailed discovery and mapping of your current environment, identifying dependencies, performance baselines, and potential challenges. We create a comprehensive migration strategy tailored to your specific business constraints and technical requirements, selecting the optimal migration pattern for each workload—whether rehosting, replatforming, refactoring, or replacing. Our team manages the complexities of data transfer, including strategies for handling large datasets with minimal downtime. We implement secure connectivity between environments during transition periods and provide detailed cutover planning to minimize business disruption. Post-migration, we conduct thorough validation testing to ensure all systems function correctly in the new environment and optimize cloud resource allocation for performance and cost efficiency. We provide comprehensive knowledge transfer and documentation to enable your team to effectively manage the new cloud environment. Our cloud migration services help organizations reduce infrastructure costs, improve scalability and resilience, and accelerate innovation by leveraging modern cloud capabilities.",
  },
  {
    id: 12,
    img: <FaPalette className="w-6 h-6" />,
    image: uiuxdesign,
    path: "ui-ux-design",
    link: "/services/ui-ux-design",
    title: "UI/UX Design",
    desc: "Design that feels effortless to users while achieving business goals. Create intuitive interfaces backed by thorough user research and iterative testing methodologies. Our design approach balances aesthetic appeal with functional clarity, creates consistent experiences across devices and platforms, incorporates accessibility standards from the beginning, and establishes design systems that scale efficiently as your product grows.",
    detailContent:
      "We combine comprehensive UX research with beautiful, functional UI design, delivering interactive prototypes, comprehensive style guides, and scalable design systems that ensure consistency across your digital products. Our thorough process includes detailed user journey mapping that identifies pain points and opportunities, accessibility audits that ensure inclusive design for all users, and rigorous usability testing that validates design decisions with real user feedback. From initial wireframes and low-fidelity mockups to final production-ready assets, we craft digital experiences that drive engagement, satisfaction, and measurable business results. Our design approach begins with stakeholder interviews and requirement gathering to align design objectives with business goals. We conduct user research through methods like interviews, surveys, and contextual inquiry to develop deep understanding of user needs and behaviors. Our team creates user personas and scenarios that guide design decisions throughout the project. We develop information architecture that organizes content logically and intuitively, followed by wireframing that establishes layout and functionality without the distraction of visual design elements. Our visual design process incorporates your brand identity while establishing a cohesive look and feel that enhances usability. We create interactive prototypes that simulate the final product experience, allowing for testing and refinement before development begins. Our design deliverables include comprehensive component libraries and detailed specifications that streamline the development process. We practice collaborative design methods that involve stakeholders and development teams throughout the process, ensuring feasible implementation of design concepts. Whether redesigning an existing product or creating a new digital experience from scratch, our UI/UX services deliver intuitive, engaging interfaces that users love while meeting your business objectives.",
  },
  {
    id: 13,
    img: <FaPhoneAlt className="w-6 h-6" />,
    image: aicallingagent,
    path: "ai-calling-agent",
    link: "/services/ai-calling-agent",
    title: "AI Calling Agent",
    desc: "Always available, always professional, and remarkably human-like. Automate customer conversations with natural-sounding AI that responds intelligently to inquiries. Our calling agents handle complex dialogue flows, adapt to unexpected responses, maintain consistent brand voice across all interactions, and integrate with your CRM and business systems to provide seamless customer experiences without the limitations of traditional call centers.",
    detailContent:
      "Our sophisticated voice agents handle high volumes of inbound calls without wait times, conduct efficient lead qualification with dynamic questioning paths, and manage appointment scheduling with full CRM integration that maintains your business calendar automatically. Advanced features include comprehensive multilingual support for global operations, nuanced sentiment analysis that detects customer emotions in real-time, and adaptive learning capabilities that continuously improve conversation quality. The AI conducts remarkably natural conversations with human-like speech patterns, follows customizable call scripts while maintaining conversational flexibility, and provides detailed analytics and transcriptions for continuous performance improvement and business intelligence. Our AI calling system uses cutting-edge speech recognition technology with high accuracy across accents and background noise conditions. It features dynamic conversation flow that adapts based on caller responses and natural language understanding that grasps intent beyond specific keywords. The system includes customizable voice characteristics that align with your brand identity and programmable business logic that handles complex decision trees based on caller information and responses. Our implementation includes thorough script development with conversation designers experienced in voice interaction, seamless integration with your existing business systems, and comprehensive testing across various caller scenarios. The solution provides detailed reporting dashboards that track call outcomes, conversation quality, and business metrics, allowing for continuous optimization. Our AI calling agents excel at appointment setting, lead qualification, customer surveys, payment reminders, and customer service inquiries, handling routine calls with consistency and precision while allowing your human team to focus on complex cases that require empathy and creative problem-solving. The result is enhanced customer experience, reduced operational costs, and valuable conversation data that drives business improvement.",
  },
];
// about us page why choose content
export const whyChooseUsContent = [
  {
    img: <BiBrain className="w-6 h-6" />,
    title: "Experts who actually listen to your goals",
    desc: "Our team takes the time to truly understand your objectives and tailor solutions that align with your vision.",
  },
  {
    img: <BiRocket className="w-6 h-6" />,
    title: "A hands‑on, collaborative approach",
    desc: "We maintain a hands‑on, collaborative partnership at every step to ensure seamless communication and shared success.",
  },
  {
    img: <BiBulb className="w-6 h-6" />,
    title: "End‑to‑end support from idea to launch",
    desc: "From initial consultation to final deployment, we provide comprehensive support to bring your project to life.",
  },
  {
    img: <GoGraph className="w-6 h-6" />,
    title: "Transparent timelines and no tech jargon",
    desc: "We share clear, realistic timelines and explain every step in plain language—no hidden surprises.",
  },
  {
    img: <SlBadge className="w-6 h-6" />,
    title: "Custom solutions, not cookie‑cutter templates",
    desc: "Our solutions are tailored to your unique needs, ensuring a perfect fit rather than one‑size‑fits‑all.",
  },
  {
    img: <BsLightningChargeFill className="w-6 h-6" />,
    title: "Agile and Fast-Moving",
    desc: "We adapt quickly, iterate efficiently, and never leave you waiting months for results. Our agile workflow means progress you can actually see.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg1,
    name: "Elena D.",
    role: "Founder, Digital Finance Platform",
    desc: "“The team at SARAL really understands blockchain beyond the buzzwords. They built a secure, easy‑to‑use platform that allowed us to tokenize our assets and launch our product with confidence.”",
  },
  {
    id: 2,
    profileImg: profileImg2,
    name: "Ryan J.",
    role: "Creative Director, Indie Studio",
    desc: "“From sketchbook ideas to a polished, playable game—SARAL brought our vision to life. Great storytelling, smooth performance, and flawless execution.”",
  },
  {
    id: 3,
    profileImg: profileImg1,
    name: "Neha K.",
    role: "Innovation Lead, Logistics Company",
    desc: "“SARAL helped us implement a custom AI that automates our internal processes and delivers real-time insights. It saved us hours every week, and the results speak for themselves.”",
  },
  {
    id: 4,
    profileImg: profileImg2,
    name: "Joel A.",
    role: "Product Manager, Education Tech Startup",
    desc: "“We needed a functional, beautiful mobile app—and they delivered more than we asked for. Fast, user-friendly, and scalable for the future.”",
  },
  {
    id: 5,
    profileImg: profileImg1,
    name: "Rebecca T.",
    role: "COO, Online Retail Brand",
    desc: "“We had data. Lots of it. SARAL helped us finally make sense of it. Their ML models helped us anticipate customer needs and make smarter decisions.”",
  },
  {
    id: 6,
    profileImg: profileImg2,
    name: "James F.",
    role: "Operations Manager, Insurance Group",
    desc: "“We were wasting time on repetitive tasks. Now, our bots handle it—and we haven’t looked back. Operations are leaner, faster, and more accurate.”",
  },
  {
    id: 7,
    profileImg: profileImg1,
    name: "Linda S.",
    role: "CTO, HealthTech Company",
    desc: "“The cloud environment SARAL built for us is reliable, secure, and easy to manage. Our team has full control without the complexity.”",
  },
  {
    id: 8,
    profileImg: profileImg2,
    name: "Mason R.",
    role: "Marketing Lead, SaaS Business",
    desc: "“SARAL redesigned our site from the ground up. It now looks better, loads faster, and actually converts. We couldn’t be happier.”",
  },
  {
    id: 9,
    profileImg: profileImg1,
    name: "Alicia G.",
    role: "Strategy Director, Retail Chain",
    desc: "“SARAL helped us build clear, actionable dashboards and predictive models. It’s changed the way we operate as a business.”",
  },
];

// portfolio images (web development)

export const webPortfolioHomepage = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 90,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 91,
    img: MidwamImmersive,
    title: "Midwam ",
    link: "https://www.midwam.com/en/about",
  },
  {
    id: 92,
    img: Autopilot,
    title: "Autopilot",
    link: "https://autopilot.io/",
  },
  {
    id: 93,
    img: FEGroup,
    title: "FEGroup",
    link: "https://fe.group/",
  },
  {
    id: 94,
    img: HugeInc,
    title: "HugeInc",
    link: "https://www.hugeinc.com/",
  },
  {
    id: 95,
    img: CodeHelp,
    title: "CodeHelp",
    link: "https://www.codehelp.in/",
  },
  {
    id: 96,
    img: Spray,
    title: "Spray(Bluestar)",
    link: "https://spray-bluestar.vercel.app/",
  },
  {
    id: 97,
    img: ArcaneMirage,
    title: "ArcaneMirage",
    link: "https://www.arcanemirage.com/",
  },
  {
    id: 98,
    img: MessinaCatering,
    title: "Messina’sCatering",
    link: "https://messinascatering.com/",
  },
  {
    id: 98,
    img: MasterShala,
    title: "MasterShala",
    link: "https://mastershala.com/",
  },
  {
    id: 99,
    img: MantraDhwani,
    title: "MantraDhwani",
    link: "https://mantradhwani.com/",
  },
];

export const appPortfolioHomepage = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: FeelItMobileApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: KlikomicsMobileApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: AutoSnapMobileApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImgapp,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
  {
    id: 9,
    img: vetlab,
    title: "Vetlab",
    link: "https://play.google.com/store/apps/details?id=com.app.vetlab",
  },
  {
    id: 10,
    img: eva,
    title: "EvaPeopleApp",
    link: "https://apps.apple.com/eg/app/eva-people-app/id1551622445",
  },
  {
    id: 11,
    img: evansfrancis,
    title: "EvansFrancisChristian App",
    link: "https://play.google.com/store/apps/details?id=com.christianappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 12,
    img: planta,
    title: "Planta",
    link: "https://play.google.com/store/apps/details?id=com.stromming.planta&pcampaignid=web_share",
  },
  {
    id: 13,
    img: Serviz,
    title: "Serviz",
    link: "",
  },
  {
    id: 14,
    img: freshandfresh,
    title: "FreshandFresh",
    link: "https://play.google.com/store/apps/details?id=com.freshandfresh&hl=en_IN",
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 90,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 91,
    img: MidwamImmersive,
    title: "Midwam ",
    link: "https://www.midwam.com/en/about",
  },
  {
    id: 92,
    img: Autopilot,
    title: "Autopilot",
    link: "https://autopilot.io/",
  },
  {
    id: 93,
    img: FEGroup,
    title: "FEGroup",
    link: "https://fe.group/",
  },
  {
    id: 94,
    img: HugeInc,
    title: "HugeInc",
    link: "https://www.hugeinc.com/",
  },
  {
    id: 95,
    img: CodeHelp,
    title: "CodeHelp",
    link: "https://www.codehelp.in/",
  },
  {
    id: 96,
    img: Spray,
    title: "Spray(Bluestar)",
    link: "https://spray-bluestar.vercel.app/",
  },
  {
    id: 97,
    img: ArcaneMirage,
    title: "ArcaneMirage",
    link: "https://www.arcanemirage.com/",
  },
  {
    id: 98,
    img: MessinaCatering,
    title: "Messina’sCatering",
    link: "https://messinascatering.com/",
  },
  {
    id: 98,
    img: MasterShala,
    title: "MasterShala",
    link: "https://mastershala.com/",
  },
  {
    id: 99,
    img: MantraDhwani,
    title: "MantraDhwani",
    link: "https://mantradhwani.com/",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: FeelItMobileApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: KlikomicsMobileApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: AutoSnapMobileApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImgapp,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
  {
    id: 9,
    img: vetlab,
    title: "Vetlab",
    link: "https://play.google.com/store/apps/details?id=com.app.vetlab",
  },
  {
    id: 10,
    img: eva,
    title: "EvaPeopleApp",
    link: "https://apps.apple.com/eg/app/eva-people-app/id1551622445",
  },
  {
    id: 11,
    img: evansfrancis,
    title: "EvansFrancisChristian App",
    link: "https://play.google.com/store/apps/details?id=com.christianappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 12,
    img: planta,
    title: "Planta",
    link: "https://play.google.com/store/apps/details?id=com.stromming.planta&pcampaignid=web_share",
  },
  {
    id: 13,
    img: Serviz,
    title: "Serviz",
    link: "",
  },
  {
    id: 14,
    img: freshandfresh,
    title: "FreshandFresh",
    link: "https://play.google.com/store/apps/details?id=com.freshandfresh&hl=en_IN",
  },
];

export const blockchainPortfolio = [
  {
    id: 1,
    img: nanoflow,
    title: "Nanoflow",
    link: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
  },
  {
    id: 2,
    img: padipal,
    title: "Padipal",
    link: "https://padiepal.com",
  },
  {
    id: 3,
    img: cryptopadie,
    title: "Cryptopadie",
    link: "https://cryptopadie.com/",
  },
  {
    id: 3,
    img: ProjectButterfly,
    title: "ProjectButterfly",
    link: "https://projectbutterfly.io/",
  },
  {
    id: 3,
    img: Solalgo,
    title: "Solalgo",
    link: "https://solalgo.com/",
  },
  {
    id: 3,
    img: Taikonz,
    title: "Taikonz",
    link: "https://taikonz.io/",
  },
];

export const ecommercePortfolio = [
  { id: 1, img: Banjaaran, title: "Banjaaran", link: "https://banjaaran.in/" },
  { id: 2, img: GullyLabs, title: "GullyLabs", link: "https://gullylabs.com/" },
  {
    id: 3,
    img: NickronIndia,
    title: "NickronIndia",
    link: "https://nickronindia.com/",
  },
  {
    id: 3,
    img: OfficialDAPP,
    title: "OfficialDAPP",
    link: "https://www.officialdapp.com/",
  },
];

export const aiPortfolio = [
  {
    id: 1,
    img: FindMyAITool,
    title: "FindMyAITool",
    link: "https://findmyaitool.com/",
  },
];
export const shopifyPortfolio = [
  {
    id: 1,
    img: BBBShop,
    title: "BBBShop",
    link: "https://bbbshop.in/",
  },
  {
    id: 2,
    img: NaseemPerfume,
    title: "NaseemPerfume",
    link: "https://www.naseemperfume.in/?srsltid=AfmBOorIvRMnc7wcdjWvHxfpimuWs5ydG5EEQhiauY7tudZmmdcva4cR",
  },
  {
    id: 3,
    img: TheEthnicCloset,
    title: "TheEthnicCloset",
    link: "https://theethniccloset.com/?srsltid=AfmBOoo0WbBJZTElLP4NpwdFGmYIf6jnO3uV3LWD6Fb1q-ceZVpWzihm",
  },
];

export const aboutUsItems = [
  {
    title: "Built for Builders. Powered by Passion.",
    description:
      "At SARAL, we’re more than just a tech services firm—we’re your product development partners, problem‑solvers, and creative collaborators. We dive into your challenges, explore what’s possible, and build technology that actually works for your users.",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Practical Innovation",
    description:
      "We don’t chase trends. We build things that make sense for your business and your users—smart, future‑ready, and grounded in reality.",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "People First",
    description:
      "Our clients aren’t just line items in a project tracker. We listen, ask the right questions, and genuinely care about helping you succeed.",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Built with Care",
    description:
      "From architecture to UI, we obsess over the details—because the little things add up to something big. We don’t cut corners.",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Always Looking Ahead",
    description:
      "We build systems that don’t just solve today’s problems—they’re flexible enough to handle whatever’s coming next.",
    image: aboutfive,
    gradient: "from-primary/60 to-primary/80",
  },
];

export const landingPageContent = [
  {
    title: "AI Development",
    link: "ai-development",
    heading: ` Harnessing Cutting-Edge
                  <span className="text-primary"> Artificial Intelligence </span>
                  to Revolutionize Your Business`,
    headignpara: `  We build intelligent systems that learn from data, automate processes, and deliver predictive insights tailored to your goals.`,
    aboutHeading: `Transformative AI Solutions for Modern Enterprises`,
    aboutPara: `From custom machine learning models to natural language processing and computer vision, our AI development services drive efficiency, innovation, and competitive advantage. Partner with us to unlock the full potential of your data.`,
    aboutImage: aidevelopment,
  },
  {
    title: "Data Science",
    link: "data-science",
    heading: ` Turning Complex Data into
                  <span className="text-primary"> Actionable Insights </span>
                  for Strategic Decision-Making`,
    headignpara: `  We leverage statistical analysis, data visualization, and advanced algorithms to uncover trends and inform business strategy.`,
    aboutHeading: `Data-Driven Strategies for Growth and Innovation`,
    aboutPara: `Our data science expertise spans exploratory analysis, predictive analytics, and custom dashboards. We help you harness big data to optimize operations, understand customer behavior, and drive sustainable growth.`,
    aboutImage: datascience,
  },
  {
    title: "Blockchain Development",
    link: "blockchain-development",
    heading: ` Building Secure and Transparent
                  <span className="text-primary"> Blockchain </span>
                  Solutions for the Future`,
    headignpara: `  We design and deploy decentralized applications, smart contracts, and enterprise-grade blockchain networks.`,
    aboutHeading: `Innovative Blockchain Services for Trust and Automation`,
    aboutPara: `Whether you need a private consortium blockchain or a public decentralized app, our blockchain development services ensure immutability, transparency, and security for your critical transactions.`,
    aboutImage: blockchaindevelopment,
  },
];
