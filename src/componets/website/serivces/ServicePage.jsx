import { useParams, useLocation } from "react-router-dom";
import { allServices } from "../../../constant";
import Testimonials from "../../common/Testimonials";
import SEOHead from "../../../components/SEO/SEOHead";
import { serviceSeoData } from "../../../data/seoData";

const ServicePage = () => {
  // Get the current path
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();

  // Find the service that matches the current path
  const details = allServices.find((service) => service.path === currentPath);

  const splitIntoParagraphs = (text, numParagraphs = 3) => {
    const sentences = text.split(". ").map((sentence) => sentence + ".");
    const chunkSize = Math.ceil(sentences.length / numParagraphs);
    const paragraphs = [];

    for (let i = 0; i < sentences.length; i += chunkSize) {
      paragraphs.push(sentences.slice(i, i + chunkSize).join(" "));
    }

    return paragraphs;
  };

  // If service not found
  if (!details) {
    return <div>Service not found</div>;
  }

  // Get SEO data for this service
  const seoData = serviceSeoData[currentPath] || {};

  return (
    <>
      <SEOHead {...seoData} />
      <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={details.image} // Assuming you have images named after the paths
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt={details.title}
      />
      <div className="flex flex-col gap-4 md:px-5">
        {/* Service Title */}
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          {details.title}
        </h2>

        {/* Service Description */}
        <div data-aos="fade-up" className="description">
          {splitIntoParagraphs(details.detailContent).map(
            (paragraph, index) => (
              <p key={index} className="py-2">
                {paragraph}
              </p>
            )
          )}
        </div>

        {/* Testimonials */}
        <div data-aos="fade-up" className="pt-4">
          <Testimonials />
        </div>
      </div>
    </div>
    </>
  );
};

export default ServicePage;
