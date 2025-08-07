// src/pages/BlogDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../../data/blogs";
import SEOHead from "../../components/SEO/SEOHead";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="bg-backgroundcolor min-h-screen flex items-center justify-center ">
        <div className="text-center">
          <h2 className="heading-2 text-primarytextcolor">Blog not found</h2>
          <p className="desc text-secondary mt-4">
            The blog you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={`${blog.title} - SARAL Blog`}
        description={blog.excerpt || blog.content.substring(0, 160)}
        keywords={`${blog.category}, technology, AI, blockchain, web development, SARAL blog`}
        canonical={`/blogs/${id}`}
        ogImage={blog.image}
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blog.title,
          "description": blog.excerpt || blog.content.substring(0, 160),
          "image": blog.image,
          "author": {
            "@type": "Organization",
            "name": "SARAL"
          },
          "publisher": {
            "@type": "Organization",
            "name": "SARAL",
            "logo": {
              "@type": "ImageObject",
              "url": "https://saral-labs.com/logo.jpeg"
            }
          },
          "datePublished": blog.date,
          "dateModified": blog.date
        }}
      />
      <div className="bg-backgroundcolor min-h-screen pt-[9rem] pb-[3rem]">
      <div className="wrapper">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-tertiary text-primary">
              {blog.category}
            </span>
            <span className="text-xs text-secondary ml-2">{blog.date}</span>
          </div>

          <div className="mb-10 h-96 overflow-hidden rounded-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="prose max-w-none font-inter text-primarytextcolor"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <div className="mt-12 pt-8 border-t border-bordercolor">
            <a href="/blogs" className="secondary-btn inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blogs
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogDetails;
