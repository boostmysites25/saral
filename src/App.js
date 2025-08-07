import { Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { LandingPage } from "./pages/landingPages/LandingPage";
import LandingHeader from "./componets/landingPages/LandingHeader";
import LandingFooter from "./componets/landingPages/LandingFooter";
import WebsiteHeader from "./componets/website/WebsiteHeader";
import WebsiteFooter from "./componets/website/WebsiteFooter";
import { allServices, routes } from "./constant";
import { Suspense, useEffect } from "react";
import { LoadingSpinner } from "./componets/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./componets/SpinnerContext";
import ServicePageLayout from "./layout/ServicePageLayout";
// import WebAppDevelopment from "./componets/website/serivces/WebAppDevelopment.jsx";
// import ArtificialIntelligence from "./componets/website/serivces/ArtificialIntelligence.jsx";
// import ChatbotDevelopment from "./componets/website/serivces/ChatbotDevelopment.jsx";
// import DataAnalytics from "./componets/website/serivces/DataAnalytics.jsx";
// import GameDevelopment from "./componets/website/serivces/GameDevelopment.jsx";
// import BlockchainDevelopment from "./componets/website/serivces/BlockchainDevelopment.jsx";
// import MachineLearning from "./componets/website/serivces/MachineLearning.jsx";
// import CloudComputing from "./componets/website/serivces/CloudComputing.jsx";
// import RPA from "./componets/website/serivces/RPA.jsx";
import WhatsAppIcon from "./componets/common/Whatsapp.jsx";
import { Toaster } from "react-hot-toast";
import Thankyou from "./componets/common/ThankYou.jsx";
import ServicePage from "./componets/website/serivces/ServicePage.jsx";
import { LandingPageTwo } from "./pages/landingPages/LandingPageTwo.jsx";
import BlogDetails from "./pages/website/BlogDetails.jsx";

AOS.init({
  once: true,
  duration: 500,
  offset: 0,
});

export default function App() {
  return (
    <HelmetProvider>
      <SpinnerContextProvider>
        <LoadingSpinnerContext />
        <Suspense fallback={<LoadingSpinner />}>
          <WhatsAppIcon />
          <Toaster
            position="top-bottom"
            toastOptions={{
              style: {
                background: "#010C2A",
                color: "#ffffff",
              },
            }}
          />
          <ScrollToTop />
          <Routes>
          {/* Website Pages */}
          {routes.map(({ component, name, path }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <>
                  <WebsiteHeader name={name} />
                  {component}
                  <WebsiteFooter />
                </>
              }
            />
          ))}
          <Route
            path="/blogs/:id"
            element={
              <>
                {" "}
                <WebsiteHeader />
                <BlogDetails /> <WebsiteFooter />
              </>
            }
          />

          <Route path="/thank-you" element={<Thankyou />} />

          <Route path="/services" element={<ServicePageLayout />}>
            {allServices.map((obj) => (
              <Route path={obj.path} element={<ServicePage />} />
            ))}
            {/* <Route
              path="blockchain-development"
              element={<BlockchainDevelopment />}
            />
            <Route path="game-development" element={<GameDevelopment />} />
            <Route path="ai-development" element={<ArtificialIntelligence />} />
            <Route path="web-app-development" element={<WebAppDevelopment />} />
            <Route path="machine-learning" element={<MachineLearning />} />
            <Route path="RPA" element={<RPA />} />
            <Route path="cloud-computing" element={<CloudComputing />} />

            <Route
              path="chatbot-development"
              element={<ChatbotDevelopment />}
            />
            <Route path="data-analytics" element={<DataAnalytics />} /> */}
          </Route>

          {/* Landing Pages */}
          <Route
            path="/web-development"
            element={
              <>
                <LandingHeader />
                <LandingPage page={"web-development"} />
                <LandingFooter />
              </>
            }
          />
          <Route
            path="/app-development"
            element={
              <>
                <LandingHeader />
                <LandingPage page={"app-development"} />
                <LandingFooter />
              </>
            }
          />
          <Route
            path="/ai-development"
            element={
              <>
                <LandingHeader />
                <LandingPageTwo page={"ai-development"} />
                <LandingFooter />
              </>
            }
          />
          <Route
            path="/data-science"
            element={
              <>
                <LandingHeader />
                <LandingPageTwo page={"data-science"} />
                <LandingFooter />
              </>
            }
          />
          <Route
            path="/blockchain-development"
            element={
              <>
                <LandingHeader />
                <LandingPageTwo page={"blockchain-development"} />
                <LandingFooter />
              </>
            }
          />
                  </Routes>
        </Suspense>
      </SpinnerContextProvider>
    </HelmetProvider>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return null;
};
