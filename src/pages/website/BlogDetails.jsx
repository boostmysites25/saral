// src/pages/BlogDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { useBlogBySlug } from "../../utils/api";
import SEOHead from "../../components/SEO/SEOHead";
import { LoadingSpinner } from "../../componets/common/LoadingSpinner";
import ErrorBoundary from "../../componets/common/ErrorBoundary";

const BlogDetails = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useBlogBySlug(slug);

  if (isLoading) {
    return (
      <div className="bg-backgroundcolor min-h-screen pt-[9rem] pb-[3rem] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !data?.blog) {
    return (
      <div className="bg-backgroundcolor min-h-screen pt-[9rem] pb-[3rem] flex items-center justify-center">
        <div className="text-center">
          <h2 className="heading-2 text-primarytextcolor">Blog not found</h2>
          <p className="desc text-secondary mt-4">
            The blog you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const blog = data.blog;

  // Format date from API response
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get keywords from API response
  const getKeywords = () => {
    const keywords = [];
    if (blog.categoryId?.name) keywords.push(blog.categoryId.name);
    if (blog.metaKeywords && Array.isArray(blog.metaKeywords)) {
      keywords.push(...blog.metaKeywords);
    }
    keywords.push(
      "technology",
      "AI",
      "blockchain",
      "web development",
      "SARAL blog"
    );
    return keywords.join(", ");
  };

  // Calculate reading time
  const calculateReadingTime = (content) => {
    if (!content) return 0;
    // Remove HTML tags and count words
    const textContent = content.replace(/<[^>]*>/g, "");
    const wordCount = textContent.split(/\s+/).length;
    // Average reading speed is 200-250 words per minute
    return Math.ceil(wordCount / 200);
  };

  return (
    <ErrorBoundary>
      <SEOHead
        title={`${blog.title} - SARAL Blog`}
        description={
          blog.metaDescription || blog.excerpt || blog.content.substring(0, 160)
        }
        keywords={getKeywords()}
        canonical={`/blogs/${blog.slug}`}
        ogImage={blog.imageUrl}
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blog.title,
          description:
            blog.metaDescription ||
            blog.excerpt ||
            blog.content.substring(0, 160),
          image: blog.imageUrl,
          author: {
            "@type": "Person",
            name: blog.author?.name || blog.authorId?.name || "SARAL",
          },
          publisher: {
            "@type": "Organization",
            name: "SARAL",
            logo: {
              "@type": "ImageObject",
              url: "https://saral-labs.com/logo.jpeg",
            },
          },
          datePublished: blog.publishDate,
          dateModified: blog.updatedAt || blog.publishDate,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://saral-labs.com/blogs/${blog.slug}`,
          },
        }}
      />
      <div className="min-h-screen pt-[9rem] pb-[3rem]">
        <div className="wrapper">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-tertiary text-primary">
                  {blog.categoryId?.name || blog.category}
                </span>
                <span className="text-xs text-secondary">
                  {formatDate(blog.publishDate)}
                </span>
                <span className="text-xs text-secondary">
                  • {calculateReadingTime(blog.content)} min read
                </span>
              </div>
            </div>

            {/* Blog Title */}
            <div className="mb-8">
              <h1 className="heading-2 text-primarytextcolor mb-4">
                {blog.title}
              </h1>
              {blog.excerpt && (
                <p className="text-lg text-secondary leading-relaxed">
                  {blog.excerpt}
                </p>
              )}
            </div>

            <div className="mb-10 h-96 overflow-hidden rounded-lg">
              <img
                src={blog.imageUrl}
                alt={blog.imageAlt || blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose max-w-none font-inter text-primarytextcolor">
              <div
                className="reset-html-styles"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>

            {/* Author and Tags Section */}
            <div className="mt-8 pt-8 border-t border-bordercolor">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="text-sm">
                    <span className="text-secondary">By </span>
                    <span className="font-semibold text-primarytextcolor">
                      {blog.author?.name || blog.authorId?.name || "SARAL Team"}
                    </span>
                  </div>
                </div>

                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Additional Blog Info */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-4 text-sm text-secondary">
                  <div>
                    <span className="font-medium">Published:</span>{" "}
                    {formatDate(blog.publishDate)}
                  </div>
                  {blog.updatedAt && blog.updatedAt !== blog.publishDate && (
                    <div>
                      <span className="font-medium">Updated:</span>{" "}
                      {formatDate(blog.updatedAt)}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-bordercolor">
              <a
                href="/blogs"
                className="secondary-btn inline-flex items-center w-fit"
              >
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
    </ErrorBoundary>
  );
};

export default BlogDetails;
