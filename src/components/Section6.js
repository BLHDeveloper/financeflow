"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import appDownloadOptions from "../data/appDownloadOptions";
import ErrorDisplay from "./common/ErrorDisplay"; // Vous devrez créer ce composant
import LoadingSpinner from "./common/LoadingSpinner"; // Vous devrez créer ce composant

// Composant réutilisable pour les titres de sections
const SectionTitle = ({ title, description }) => (
  <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-[16px] max-sm:items-start">
    <h2 className="text-white text-[42px] font-bold leading-[55.02px] max-sm:text-[28px] max-sm:leading-[36px] max-sm:w-[305px]">
      {title}
    </h2>
    <p className="text-white text-[18px] font-normal leading-[32.004px] w-[461px] max-sm:text-[16px] max-sm:leading-[26px] max-sm:w-[330px]">
      {description}
    </p>
  </div>
);

// Composant pour les cartes de blog
const BlogCard = ({ post }) => (
  <div className="bg-[#010D50] rounded-[40px] overflow-hidden shadow-lg">
    <Image
      src={post.image}
      alt="Article thumbnail"
      width={382}
      height={215}
      className="relative"
    />
    <div className="flex-shrink-0 pl-[23px]">
      <div className="flex items-start w-[109px] px-[14.158px] py-[9px] rounded-[1000px] bg-[#0328EE] mb-[24px]">
        <span className="text-white text-[14px] font-medium leading-[18.004px] tracking-[0.7px] uppercase">
          {post.category}
        </span>
      </div>
      <p className="w-[328px] text-white text-[22px] font-bold leading-[30.998px] mb-[16px]">
        {post.title}
      </p>
      <p className="w-[329px] text-white text-[18px] font-normal leading-[32.004px] mb-[39px]">
        {post.content}
      </p>
      <div className="w-[336px] h-px flex-shrink-0 bg-white/10 mb-[23px]"></div>
      <div className="flex items-center gap-[15px] w-[486px]] mb-[34px]">
        <Image
          src={post.authorImage || "/Images/img_card.jpg"}
          alt={`Author ${post.author}`}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center items-start gap-[6px] pr-[2px]">
          <p className="text-white text-[16px] font-bold leading-[18px] tracking-[0.8px] uppercase">
            {post.author}
          </p>
          <p className="text-white text-[16px] font-normal leading-[18px] tracking-[0.8px] uppercase">
            {post.date}
          </p>
        </div>
      </div>
    </div>
  </div>
);

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
