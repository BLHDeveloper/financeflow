"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import appDownloadOptions from "../data/appDownloadOptions";
import ErrorDisplay from "./common/ErrorDisplay";
import LoadingSpinner from "./common/LoadingSpinner";
import SectionTitle from "./SectionTitle";
import BlogCard from "./BlogCard"; // Import du nouveau composant BlogCard

// Composant pour les options de téléchargement d'application
const DownloadOption = ({ option }) => (
  <div className="w-[563px] max-sm:w-[358px] flex-shrink-0 rounded-[40px] bg-[#010D50] pl-[48px] max-sm:pl-[32px] max-sm:pt-[32px] pt-[48px]">
    <h2 className="text-white text-[42px] font-bold leading-[55.02px] mb-[16px] max-sm:text-[28px] max-sm:leading-[36px]">
      {option.title}
    </h2>
    <p className="w-[443px] max-sm:w-[293px] text-white text-[18px] font-normal leading-[32.004px] mb-[32px] max-sm:mb-[24px] max-sm:text-[16px] max-sm:leading-[26px]">
      {option.description}
    </p>
    <Button
      label={option.buttonLabel}
      leftIcon={option.icon}
      className="h-[70px] mb-[40px]"
    />
    <Image
      src={option.image}
      alt={`${option.platform} device`}
      width={458}
      height={935}
      className="max-sm:pr-8"
    />
  </div>
);

// BlogSection - Composant séparé pour gérer la section blog
const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setIsLoading(true);
        // Simuler un délai réseau
        // Pour une vraie API, utilisez fetch ou axios
        const response = await fetch("/api/blogPosts");

        // Si l'API n'est pas disponible, chargez depuis le fichier JSON local
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

        // Fallback aux données locales en cas d'erreur
        try {
          const data = await import("../data/blogPosts.json");
          setBlogPosts(data.default || []);
        } catch (localError) {
          // Si même les données locales ne peuvent pas être chargées
          console.error("Failed to load local blog data:", localError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Détermine les articles à afficher (3 ou tous)
  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 3);

  if (isLoading) {
    return <LoadingSpinner message="Chargement des articles..." />;
  }

  if (error && blogPosts.length === 0) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <div className="flex flex-col px-[133px] gap-12 mb-[120px] max-sm:px-[16px] max-sm:gap-[24px] max-sm:mb-[80px]">
      <SectionTitle
        title="Browse our latest news"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet."
      />
      <div className="max-w-7xl mx-auto">
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-[16px]">
          {displayedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        {/* View All/Show Less Button */}
        {blogPosts.length > 3 && (
          <div className="flex justify-center mt-10 max-sm:mt-[16px]">
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

// AppDownloadSection - Composant séparé pour la section téléchargement
const AppDownloadSection = () => (
  <div className="flex flex-col px-[133px] gap-12 mb-[120px] max-sm:px-[16px] max-sm:gap-[24px] max-sm:mb-[80px]">
    <SectionTitle
      title="Download our app"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet."
    />
    <div className="max-w-7xl mx-auto">
      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[72px] max-sm:gap-4">
        {appDownloadOptions.map((option, index) => (
          <DownloadOption key={index} option={option} />
        ))}
      </div>
    </div>
  </div>
);

// Composant principal Section6
const Section6 = () => {
  return (
    <>
      <BlogSection />
      <AppDownloadSection />
    </>
  );
};

export default Section6;
