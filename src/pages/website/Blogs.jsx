// src/pages/Blogs.js
import React from "react";
import { useBlogs } from "../../utils/api";
import BlogCard from "../../componets/common/BlogCard";
import SEOHead from "../../components/SEO/SEOHead";
import { seoData } from "../../data/seoData";
import { LoadingSpinner } from "../../componets/common/LoadingSpinner";
import ErrorBoundary from "../../componets/common/ErrorBoundary";

const Blogs = () => {
  const { data, isLoading, error } = useBlogs();

  if (isLoading) {
    return (
      <div className="bg-backgroundcolor min-h-screen pt-[8rem] pb-[4rem] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-backgroundcolor min-h-screen pt-[8rem] pb-[4rem]">
        <div className="wrapper">
          <div className="text-center">
            <h2 className="heading-2 text-primarytextcolor mb-4">Error Loading Blogs</h2>
            <p className="desc text-secondary">
              Unable to load blogs at the moment. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const blogs = data?.blogs || [];

  return (
    <ErrorBoundary>
      <SEOHead {...seoData.blogs} />
      <div className="bg-backgroundcolor min-h-screen pt-[8rem] pb-[4rem]">
        <div className="wrapper">
          <div className="text-center mb-12">
            <h1 className="heading-1 text-primarytextcolor mb-4">
              Our Latest Blogs
            </h1>
            <p className="desc text-secondary max-w-2xl mx-auto">
              Discover insights, trends, and innovations in AI and technology.
            </p>
          </div>

          {blogs.length === 0 ? (
            <div className="text-center">
              <p className="desc text-secondary">No blogs available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Blogs;
