"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import appDownloadOptions from "../data/appDownloadOptions";
import ErrorDisplay from "./common/ErrorDisplay";
import LoadingSpinner from "./common/LoadingSpinner";
import SectionTitle from "./SectionTitle";
import BlogCard from "./BlogCard";

const DownloadOption = ({ option }) => (
  <div className="w-full rounded-[32px] bg-[#010D50] pl-8 sm:pl-12 pt-8 sm:pt-12 overflow-hidden">
    <h2 className="text-white text-2xl sm:text-3xl lg:text-[42px] font-bold leading-tight lg:leading-[55px] mb-4">
      {option.title}
    </h2>
    <p className="text-white/80 text-base sm:text-lg font-normal leading-7 sm:leading-8 mb-6 sm:mb-8 max-w-md">
      {option.description}
    </p>
    <Button
      label={option.buttonLabel}
      leftIcon={option.icon}
      className="h-[70px] mb-8 sm:mb-10"
    />
    <Image
      src={option.image}
      alt={`${option.platform} device`}
      width={458}
      height={935}
      className="max-w-full h-auto max-sm:pr-8"
    />
  </div>
);

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/blogPosts");

        if (!response.ok) {
          const data = await import("../data/blogPosts.json");
          setBlogPosts(data.default || []);
          return;
        }

        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
        setError(
          "Impossible de charger les articles de blog. Veuillez réessayer plus tard."
        );

        try {
          const data = await import("../data/blogPosts.json");
          setBlogPosts(data.default || []);
        } catch (localError) {
          console.error("Failed to load local blog data:", localError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const toggleShowAll = () => setShowAll(!showAll);
  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 3);

  if (isLoading) {
    return <LoadingSpinner message="Chargement des articles..." />;
  }

  if (error && blogPosts.length === 0) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <div className="container-main flex flex-col gap-10 sm:gap-12 mb-20 sm:mb-28">
      <SectionTitle
        title="Browse our latest news"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet."
      />
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        {blogPosts.length > 3 && (
          <div className="flex justify-center mt-10">
            <Button
              label={showAll ? "Show Less" : "View All Articles"}
              variant="secondary"
              onClick={toggleShowAll}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const AppDownloadSection = () => (
  <div className="container-main flex flex-col gap-10 sm:gap-12 mb-20 sm:mb-28">
    <SectionTitle
      title="Download our app"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet."
    />
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
        {appDownloadOptions.map((option, index) => (
          <DownloadOption key={index} option={option} />
        ))}
      </div>
    </div>
  </div>
);

const Section6 = () => {
  return (
    <>
      <BlogSection />
      <AppDownloadSection />
    </>
  );
};

export default Section6;
