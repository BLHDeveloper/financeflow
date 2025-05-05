import React from "react";
import SectionTitle from "../../../components/SectionTitle"; // Assurez-vous que le chemin est correct
import GrandTitle from "../../../components/grandTitle";

const FeatureCard = ({ feature: { title, description, icon, className } }) => (
  <div className="sm:inline-flex max-sm:flex max-sm:flex-col sm:p-[58px_32px] max-sm:px-[32px] max-sm:py-[58px] items-start gap-[24px] rounded-[40px] bg-[#010D50]">
    <div
      className={`${className} flex justify-center items-center rounded-[20px] bg-[#0328EE]`}
      aria-hidden="true"
    >
      <div className="flex items-start">{icon}</div>
    </div>
    <div className="flex flex-col justify-center items-start sm:pr-[27px] gap-[7px]">
      <h3 className="text-white text-[18px] font-bold leading-[25.992px] tracking-[0.9px] uppercase max-sm:self-stretch">
        {title}
      </h3>
      <p className="text-white text-[18px] font-normal leading-[32.004px] sm:w-[402px] max-sm:self-stretch">
        {description}
      </p>
    </div>
  </div>
);
const Section1 = () => {
  const FEATURES_DATA = [
    {
      title: "Open Source",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="36"
          viewBox="0 0 47 36"
          fill="none"
        >
          <g clipPath="url(#clip0_2_898)">
            <path
              d="M23.2334 24.1177C15.9127 24.1177 9.73584 25.3139 9.73584 29.9308C9.73584 34.5495 15.9526 35.7037 23.2334 35.7037C30.5541 35.7037 36.731 34.5075 36.731 29.8906C36.731 25.2719 30.5142 24.1177 23.2334 24.1177Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M23.2334 19.7191C28.1905 19.7191 32.1653 15.7214 32.1653 10.7358C32.1653 5.74822 28.1905 1.75244 23.2334 1.75244C18.2763 1.75244 14.3015 5.74822 14.3015 10.7358C14.3015 15.7214 18.2763 19.7191 23.2334 19.7191Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M42.6255 12.8277C43.908 7.78278 40.1479 3.25195 35.3599 3.25195C34.8393 3.25195 34.3415 3.30928 33.8551 3.40673C33.7905 3.42202 33.7183 3.45451 33.6803 3.51184C33.6366 3.58445 33.6689 3.68191 33.7164 3.74497C35.1547 5.77439 35.9812 8.24523 35.9812 10.8976C35.9812 13.4392 35.2231 15.8087 33.8931 17.7751C33.7563 17.9777 33.8779 18.2509 34.1192 18.293C34.4536 18.3522 34.7956 18.3828 35.1452 18.3923C38.6317 18.4841 41.761 16.2272 42.6255 12.8277Z"
              fill="white"
            />
            <path
              d="M46.2782 24.7058C45.6398 23.3375 44.0989 22.3993 41.7562 21.9387C40.6504 21.6674 37.6579 21.2852 34.8744 21.3368C34.8326 21.3425 34.8098 21.3712 34.806 21.3903C34.8003 21.417 34.8117 21.4629 34.8668 21.4916C36.1531 22.1317 41.1254 24.916 40.5003 30.7883C40.4737 31.0424 40.677 31.2622 40.9297 31.224C42.1533 31.0482 45.3016 30.3679 46.2782 28.2486C46.8178 27.1288 46.8178 25.8275 46.2782 24.7058Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M12.8269 3.40722C12.3424 3.30785 11.8427 3.25244 11.3221 3.25244C6.53416 3.25244 2.77406 7.78327 4.05846 12.8282C4.92106 16.2277 8.05036 18.4845 11.5368 18.3928C11.8864 18.3833 12.2303 18.3508 12.5628 18.2935C12.8041 18.2514 12.9257 17.9781 12.7889 17.7756C11.4589 15.8073 10.7008 13.4397 10.7008 10.8981C10.7008 8.2438 11.5292 5.77296 12.9675 3.74546C13.0131 3.6824 13.0473 3.58494 13.0017 3.51232C12.9637 3.45308 12.8934 3.42251 12.8269 3.40722Z"
              fill="white"
            />
            <path
              d="M4.92623 21.9376C2.58353 22.3982 1.04453 23.3364 0.406125 24.7047C-0.135375 25.8264 -0.135375 27.1277 0.406125 28.2495C1.38273 30.3668 4.53103 31.049 5.75463 31.2229C6.00733 31.2611 6.20873 31.0433 6.18213 30.7872C5.55703 24.9168 10.5293 22.1326 11.8175 21.4924C11.8707 21.4618 11.8821 21.4179 11.8764 21.3892C11.8726 21.3701 11.8517 21.3414 11.8099 21.3376C9.02453 21.2841 6.03393 21.6663 4.92623 21.9376Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_898">
              <rect
                width="47"
                height="35"
                fill="white"
                transform="translate(0 0.984375)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      className: "pt-[17px] pr-[10px] pb-[16px] pl-[11px]",
    },
    {
      title: "Transparent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="46"
          viewBox="0 0 45 46"
          fill="none"
        >
          <g clipPath="url(#clip0_2_922)">
            <path
              d="M19.2599 39.8023C29.7081 39.8023 38.1782 31.2791 38.1782 20.7652C38.1782 10.2513 29.7081 1.72809 19.2599 1.72809C8.81156 1.72809 0.341553 10.2513 0.341553 20.7652C0.341553 31.2791 8.81156 39.8023 19.2599 39.8023Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M41.4258 45.6296C40.6909 45.6058 39.9921 45.3035 39.4694 44.7831L34.9893 39.5464C34.0288 38.668 33.9502 37.1752 34.8132 36.1996C35.2171 35.7909 35.7663 35.5611 36.3392 35.5611C36.912 35.5611 37.4612 35.7909 37.8652 36.1996L43.4996 40.7079C44.3112 41.5386 44.5616 42.7718 44.139 43.8563C43.7163 44.9408 42.6996 45.674 41.5432 45.7281L41.4258 45.6296Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_922">
              <rect
                width="45"
                height="45"
                fill="white"
                transform="translate(0 0.984375)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      className: "pt-[12px] pr-[11px] pb-[11px] pl-[12px]",
    },
    {
      title: "worldwide",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="53"
          viewBox="0 0 52 53"
          fill="none"
        >
          <g clipPath="url(#clip0_2_911)">
            <path
              d="M51.4875 26.7281C51.4875 40.9574 39.973 52.4719 25.7437 52.4719C11.5145 52.4719 0 40.9574 0 26.7281C0 12.4989 11.5145 0.984375 25.7437 0.984375C28.7862 0.984375 31.735 1.49925 34.4498 2.4822C44.3728 6.03951 51.4875 15.5413 51.4875 26.7281Z"
              fill="white"
              fillOpacity="0.4"
            />
            <path
              d="M50.9726 21.5327C49.1472 12.6863 42.7815 5.47799 34.4498 2.48236C34.403 2.48236 34.3562 2.43555 34.3562 2.43555L34.4498 7.39707C34.4498 8.66085 33.7009 9.83102 32.5308 10.3459C29.9564 11.4693 27.382 10.8608 26.3055 13.8096C25.4161 16.0095 27.7565 22.0476 30.6117 22.0476C34.2158 22.0476 35.9477 14.7926 37.0242 14.7926C37.7263 14.7926 38.8029 16.9925 40.0667 18.6307C40.9092 19.7541 42.2198 20.3626 43.624 20.3626H46.0111L50.9726 21.5327Z"
              fill="white"
            />
            <path
              d="M30.3308 32.3448C29.0202 34.1702 35.9008 39.7402 38.1943 38.6637C42.0793 36.8382 44.6068 33.0469 44.6068 31.6427C44.6068 30.2384 42.7814 27.5237 36.5561 31.7363C34.8242 33 31.6882 30.4725 30.3308 32.3448Z"
              fill="white"
            />
            <path
              d="M19.8929 27.243C21.2503 25.8856 21.6715 23.7793 20.9694 22.5623C18.7227 18.4901 13.3867 20.6433 12.8719 24.9027C12.591 27.4771 11.0464 30.0982 9.73581 31.4556C8.42522 32.7662 5.85085 32.0641 5.14875 30.145C4.35303 27.9919 7.11463 27.1962 6.69337 24.4346C6.59976 23.6857 5.80404 23.3112 4.8211 23.1708L0.187227 23.3581C0.0936134 24.4346 0 25.558 0 26.7281C0 39.0383 8.61245 49.3358 20.1737 51.8634V47.2763C20.1737 47.2763 20.1737 47.2763 19.0036 46.1062C17.8334 44.936 20.2205 42.9701 20.8758 40.4893C22.7013 33.4683 16.6164 33.1875 16.4292 31.6429C16.242 29.911 18.5355 28.6004 19.8929 27.243Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_911">
              <rect
                width="52"
                height="52"
                fill="white"
                transform="translate(0 0.984375)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      className: "p-[8px]",
    },
    {
      title: "Community Driven",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="47"
          viewBox="0 0 46 47"
          fill="none"
        >
          <g clipPath="url(#clip0_22_6913)">
            <path
              opacity="0.4"
              d="M45.1314 23.7281C45.1314 36.0928 35.1084 46.1158 22.7437 46.1158C10.3789 46.1158 0.355957 36.0928 0.355957 23.7281C0.355957 11.3656 10.3789 1.34033 22.7437 1.34033C35.1084 1.34033 45.1314 11.3656 45.1314 23.7281Z"
              fill="white"
            />
            <path
              d="M31.3848 16.3512L27.758 27.8137C27.6237 28.2838 27.2431 28.6644 26.7729 28.801L15.3552 32.3808C14.594 32.6293 13.8552 31.8882 14.1015 31.1271L17.6835 19.6422C17.8179 19.172 18.1984 18.8138 18.6686 18.6571L30.1311 15.0751C30.9147 14.8288 31.6311 15.5676 31.3848 16.3512Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_22_6913">
              <rect
                width="46"
                height="46"
                fill="white"
                transform="translate(0 0.984375)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      className: "p-[11px]",
    },
  ];
  return (
    <>
      <div className="px-[133px] max-sm:px-4">
        <GrandTitle
          title="About Finance Flow"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque imperdiet vitae dolor non aliquam. Malesuada."
          className="max-sm:my-[48px] mt-[60px] mb-[112px]"
        />
        <SectionTitle
          title="What drives Finance Flow?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
        />
        <div className="grid grid-cols-2 max-sm:inline-flex max-sm:flex-col max-sm:items-start max-sm:gap-[16px] gap-7 mt-[29px] max-sm:mt-[16px] mb-[200px] max-sm:mb-[44px]">
          {FEATURES_DATA.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Section1;
