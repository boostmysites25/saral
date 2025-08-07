// src/components/BlogCard.js
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-tertiary text-primary">
            {blog.category}
          </span>
          <span className="text-xs text-secondary ml-2">{blog.date}</span>
        </div>
        <h3 className="text-xl font-raleway font-semibold text-primarytextcolor mb-2 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-sm font-inter text-secondary mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        <Link
          to={`/blogs/${blog.id}`}
          className="text-primary hover:text-headertexthoverandactive font-medium text-sm flex items-center transition-colors duration-300"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
