"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ErrorDisplay from "../../components/common/ErrorDisplay";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import BlogCard from "../../components/BlogCard"; // Import du nouveau composant BlogCard
import Button from "../../components/Button";
import Details from "./Details"; // Import du composant de détails

// BlogSection - Composant séparé pour gérer la section blog
const BlogSection = ({ onPostClick }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  0;
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All"); // Nouvel état pour la catégorie active
  const postsPerPage = 3; // Nombre d'articles par page

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setIsLoading(true);
        // Simuler un délai réseau
        // Pour une vraie API, utilisez fetch ou axios
        const response = await fetch("/api/blogPosts");

        // Si l'API n'est pas disponible, chargez depuis le fichier JSON local
        if (!response.ok) {
          const data = await import("../../data/blogPosts.json");
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

  // Filtrer les posts selon la catégorie sélectionnée
  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  // Mettre à jour la pagination pour tenir compte du filtrage
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Réinitialiser la page actuelle lors du changement de catégorie
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Calculer l'index du premier et du dernier post à afficher
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Récupérer les posts pour la page actuelle (à partir des posts filtrés)
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Fonction pour changer de catégorie
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Fonction pour changer de page
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Fonction pour page précédente
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fonction pour page suivante
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (isLoading) {
    return <LoadingSpinner message="Chargement des articles..." />;
  }

  if (error && blogPosts.length === 0) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <div className="flex flex-col px-[133px] gap-12 mb-[120px] max-sm:px-[16px] max-sm:gap-[24px] max-sm:mb-[80px]">
      <div className="flex max-sm:flex-col max-sm:gap-6 sm:justify-between items-center">
        <h1 className="text-white text-[42px] max-sm:text-[28px] font-bold leading-[55.02px] max-sm:leading-[36px] tracking-[-1px]">
          Latest Posts
        </h1>
        <div className="flex max-sm:flex-col items-start gap-4 max-sm:w-full">
          <div
            className={`flex h-[40px] px-[24px] py-[11px] justify-center items-center rounded-[80px] cursor-pointer max-sm:w-full ${
              activeCategory === "All" ? "bg-[#0328EE]" : "bg-white/10"
            }`}
            onClick={() => handleCategoryChange("All")}
          >
            <p className="text-white text-center text-[16px] font-normal leading-[26px]">
              All
            </p>
          </div>
          <div
            className={`flex h-[40px] px-[24px] py-[11px] justify-center items-center rounded-[80px] cursor-pointer max-sm:w-full ${
              activeCategory === "Apps" ? "bg-[#0328EE]" : "bg-white/10"
            }`}
            onClick={() => handleCategoryChange("Apps")}
          >
            <p className="text-white text-center text-[16px] font-normal leading-[26px]">
              Apps
            </p>
          </div>
          <div
            className={`flex h-[40px] px-[24px] py-[11px] justify-center items-center rounded-[80px] cursor-pointer max-sm:w-full  ${
              activeCategory === "Products" ? "bg-[#0328EE]" : "bg-white/10"
            }`}
            onClick={() => handleCategoryChange("Products")}
          >
            <p className="text-white text-center text-[16px] font-normal leading-[26px]">
              Products
            </p>
          </div>
          <div
            className={`flex h-[40px] px-[24px] py-[11px] justify-center items-center rounded-[80px] cursor-pointer max-sm:w-full ${
              activeCategory === "Tutorial" ? "bg-[#0328EE]" : "bg-white/10"
            }`}
            onClick={() => handleCategoryChange("Tutorial")}
          >
            <p className="text-white text-center text-[16px] font-normal leading-[26px]">
              Tutorial
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Message si aucun article dans la catégorie */}
        {currentPosts.length === 0 ? (
          <div className="text-white text-center py-10">
            No items available in this category.
          </div>
        ) : (
          /* Card Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-[16px]">
            {currentPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onClick={() => onPostClick(post)}
              />
            ))}
          </div>
        )}

        {/* Pagination - uniquement affichée s'il y a des posts et plus d'une page */}
        {filteredPosts.length > postsPerPage && (
          <div className="flex justify-center mt-10 max-sm:mt-[16px]">
            <div className="flex items-center gap-4">
              {/* Bouton précédent */}
              <div
                className={`w-[36px] h-[36px] ${
                  currentPage === 1
                    ? "fill-white/10"
                    : "fill-[#010D50] cursor-pointer"
                }`}
                onClick={goToPreviousPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <rect
                    width="36"
                    height="36"
                    rx="18"
                    fill={
                      currentPage === 1 ? "rgba(255, 255, 255, 0.1)" : "#010D50"
                    }
                  />
                  <path
                    d="M20.5 12L15 17.5L20.5 23"
                    stroke="white"
                    strokeOpacity={currentPage === 1 ? "0.2" : "1"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Générer les numéros de page */}
              {Array.from({ length: Math.min(totalPages, 3) }).map((_, idx) => {
                const pageNumber = idx + 1;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-start gap-1 p-1 px-2 self-stretch cursor-pointer"
                    onClick={() => paginate(pageNumber)}
                  >
                    <p
                      className={`${
                        currentPage === pageNumber
                          ? "text-[#0328EE]"
                          : "text-white"
                      } font-normal text-[18px] leading-[32.004px] font-dm-sans`}
                    >
                      {pageNumber}
                    </p>
                  </div>
                );
              })}

              {/* Bouton suivant */}
              <div
                className={`w-[36px] h-[36px] ${
                  currentPage >= totalPages
                    ? "fill-white/10"
                    : "fill-[#010D50] cursor-pointer"
                }`}
                onClick={goToNextPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <rect
                    width="36"
                    height="36"
                    rx="18"
                    fill={
                      currentPage >= totalPages
                        ? "rgba(255, 255, 255, 0.1)"
                        : "#010D50"
                    }
                  />
                  <path
                    d="M16 12L21.5 17.5L16 23"
                    stroke="white"
                    strokeOpacity={currentPage >= totalPages ? "0.2" : "1"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Blog = () => {
  const [email, setEmail] = useState("");
  const [selectedPost, setSelectedPost] = useState(null); // Ajout de l'état pour le post sélectionné
  const [latestPost, setLatestPost] = useState(null); // State pour le dernier article
  const [isLoadingLatest, setIsLoadingLatest] = useState(true); // Nouvel état pour le chargement

  useEffect(() => {
    // Fonction pour récupérer les articles de blog
    const fetchLatestPost = async () => {
      setIsLoadingLatest(true);
      try {
        // Essayer de récupérer depuis l'API
        const response = await fetch("/api/blogPosts");

        let data;
        if (!response.ok) {
          // Si l'API n'est pas disponible, charger depuis le fichier local
          const importedData = await import("../../data/blogPosts.json");
          data = importedData.default || [];
        } else {
          data = await response.json();
        }

        // Prendre le dernier article de la liste (supposant qu'ils sont déjà triés)
        if (data && data.length > 0) {
          setLatestPost(data[data.length - 1]);
        } else {
          // Définir un post par défaut si aucun n'est trouvé
          setLatestPost({
            category: "Featured",
            title: "Cryptocurrency Explained With Pros and Cons for Investment",
            content:
              "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
            image: "/Images/card.jpg",
          });
        }
      } catch (error) {
        console.error("Failed to fetch latest post:", error);
        // Utiliser les données statiques en cas d'erreur
        setLatestPost({
          category: "Featured",
          title: "Cryptocurrency Explained With Pros and Cons for Investment",
          content:
            "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
          image: "/Images/card.jpg",
        });
      } finally {
        setIsLoadingLatest(false);
      }
    };

    fetchLatestPost();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Email soumis:", email);
      // Ici vous pouvez ajouter la logique pour envoyer l'email à votre API
      alert("Merci de vous être abonné avec: " + email);
      setEmail("");
    } else {
      alert("Veuillez saisir une adresse email");
    }
  };

  // Fonction pour gérer le clic sur un post
  const handlePostClick = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0); // Remonter en haut de la page
  };

  // Fonction pour revenir à la liste des blogs
  const handleBackToBlogs = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <div className="mt-[60px] max-sm:mt-[48px] relative">
        {selectedPost ? (
          // Afficher les détails du post sélectionné
          <>
            <div className="mx-[157px] max-sm:mx-4 mb-[30px]">
              <button
                onClick={handleBackToBlogs}
                className="text-white flex items-center gap-2 hover:text-[#0328EE] transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 19L5 12L12 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Retour aux articles
              </button>
            </div>
            <Details post={selectedPost} />
          </>
        ) : (
          // Afficher la page d'accueil du blog
          <>
            <div className="flex max-sm:flex-col sm:justify-between mb-[48px] mx-[157px] max-sm:mx-4 max-sm:gap-4">
              <h1 className="text-white text-[66px] max-sm:text-[38px] font-bold leading-[79.992px] max-sm:leading-[46px] tracking-[-1px]">
                Blog
              </h1>
              <p className="text-white text-lg font-normal leading-[32.004px] w-[568px] max-sm:w-[320px] max-sm:text-[16px] max-sm:leading-[26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                nulla suspendisse tortor aenean dis placerat.
              </p>
            </div>

            {isLoadingLatest ? (
              <div className="flex justify-center items-center py-20 mx-[157px] max-sm:mx-4 bg-[#010D50] rounded-[40px] mb-[92px] max-sm:mb-[80px]">
                <LoadingSpinner message="Chargement de l'article en vedette..." />
              </div>
            ) : latestPost ? (
              <div
                className="inline-flex max-sm:flex-col items-start rounded-[40px] bg-[#010D50] mb-[92px] max-sm:mb-[80px] mx-[157px] max-sm:mx-4 max-sm:w-[358px] cursor-pointer"
                onClick={() => handlePostClick(latestPost)}
              >
                <Image
                  src={latestPost.image}
                  alt="Blog Image"
                  width={586}
                  height={334}
                  className="rounded-t-[40px] sm:hidden"
                />
                <div className="flex flex-col justify-center items-start gap-[21px] px-[78px] max-sm:px-[24px] sm:pt-[58px] pb-[58px] max-sm:pb-[36px] pl-[47px]">
                  <div className="flex items-start rounded-[1000px] bg-[#0328EE] px-[14.189px] pl-[14.389px] py-[9px]">
                    <p className="text-white text-[14px] font-medium leading-[18.004px] tracking-[0.7px] uppercase ">
                      {latestPost.category}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <h2 className="text-white text-[28px] max-sm:text-[22px] font-bold leading-[40.012px] max-sm:leading-[30.012px] tracking-[0.28px] w-[487px] max-sm:w-[311px]">
                      {latestPost.title}
                    </h2>
                    <p className="text-white text-[18px] max-sm:text-[16px] font-normal leading-[32.004px] max-sm:leading-[26px] w-[463px] max-sm:w-[311px]">
                      {latestPost.content}
                    </p>
                  </div>
                </div>
                <Image
                  src={latestPost.image}
                  alt="Blog Image"
                  width={586}
                  height={334}
                  className="rounded-r-[40px] max-sm:hidden"
                />
              </div>
            ) : (
              <div className="flex justify-center items-center py-10 mx-[157px] max-sm:mx-4 bg-[#010D50] rounded-[40px] mb-[92px] max-sm:mb-[80px]">
                <ErrorDisplay message="Impossible de charger l'article en vedette." />
              </div>
            )}
          </>
        )}

        <div className="flex max-sm:flex-col sm:justify-between max-sm:justify-center items-center sm:px-[157px] h-[278px] max-sm:h-[521px] flex-shrink-0 bg-[#0328EE] mb-[148px] max-sm:mb-[80px]">
          <div className="flex max-sm:flex-col sm:justify-between items-center gap-[25px] max-sm:gap-[32px]">
            <div className="inline-flex justify-center items-center px-[13px] pt-[16px] pb-[15px] rounded-[20px] bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="37"
                viewBox="0 0 42 37"
                fill="none"
              >
                <g clipPath="url(#clip0_19_9892)">
                  <path
                    opacity="0.4"
                    d="M41.11 26.5992C41.11 32.334 36.5057 36.9795 30.7708 37H30.7503H10.3803C4.66598 37 0 32.3751 0 26.6403V26.6198C0 26.6198 0.012333 17.5221 0.028777 12.9466C0.0308325 12.0874 1.01747 11.6064 1.68962 12.1408C6.57349 16.0154 15.3073 23.0802 15.4162 23.1727C16.8757 24.3423 18.7256 25.0021 20.6167 25.0021C22.5077 25.0021 24.3577 24.3423 25.8171 23.1501C25.926 23.0781 34.4646 16.2251 39.4224 12.2868C40.0966 11.7503 41.0874 12.2313 41.0894 13.0884C41.11 17.629 41.11 26.5992 41.11 26.5992Z"
                    fill="#0328EE"
                  />
                  <path
                    d="M40.0331 5.49641C38.253 2.14183 34.7504 0 30.8943 0H10.3804C6.52433 0 3.02175 2.14183 1.24169 5.49641C0.842924 6.24666 1.03203 7.18192 1.69596 7.71224L16.958 19.9198C18.0269 20.7832 19.3219 21.2128 20.6168 21.2128C20.6251 21.2128 20.6312 21.2128 20.6374 21.2128C20.6436 21.2128 20.6518 21.2128 20.6579 21.2128C21.9529 21.2128 23.2479 20.7832 24.3167 19.9198L39.5788 7.71224C40.2427 7.18192 40.4318 6.24666 40.0331 5.49641Z"
                    fill="#0328EE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_19_9892">
                    <rect width="42" height="37" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-white text-[42px] max-sm:text-[28px] font-bold leading-[55.02px] max-sm:leading-[36px] w-[572px] max-sm:w-[350px]">
              Subscribe to our crypto news weekly newsletter!
            </h2>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex max-sm:hidden w-[480px] h-[80px] px-[16px] py-[8px] justify-between items-center flex-shrink-0 rounded-[100px] border-2 border-white bg-white"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="text-[#010725] text-[16px] font-normal leading-[26px] outline-none w-full bg-transparent"
            />
            <button
              type="submit"
              className="flex px-[26px] justify-center items-center self-stretch rounded-[100px] bg-[#0328EE]"
            >
              <span className="text-white text-center text-[14px] font-bold leading-[16px] tracking-[1.6px] uppercase">
                Subscribe
              </span>
            </button>
          </form>
          <form
            onSubmit={handleSubscribe}
            className="flex sm:hidden flex-col gap-5 mt-5"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="flex text-[#010725] font-normal text-[16px] leading-[26px] w-[358px] h-[80px] p-2 px-4 items-center flex-shrink-0 rounded-full border-2 border-white bg-white"
            />
            <Button
              label="Subscribe"
              variant="autour"
              className="w-full"
              onClick={handleSubscribe}
            />
          </form>
        </div>
        <BlogSection onPostClick={handlePostClick} />
      </div>
    </>
  );
};

export default Blog;
