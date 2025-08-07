// src/pages/Blogs.js
import React from "react";
import { blogs } from "../../data/blogs";
import BlogCard from "../../componets/common/BlogCard";
import SEOHead from "../../components/SEO/SEOHead";
import { seoData } from "../../data/seoData";

const Blogs = () => {
  return (
    <>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Blogs;
