import React from "react";
import Image from "next/image";
import SectionTitle from "../../../components/SectionTitle";
import Icon1 from "../../../app/icon1.svg";
import Icon2 from "../../../app/icon2.svg";
import Icon3 from "../../../app/icon3.svg";
import Icon4 from "../../../app/icon4.svg";
import Icon5 from "../../../app/icon5.svg";
const Section4 = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Carter",
      position: "CEO & CO-Founder",
      image: "/Images/p1.jpg",
    },
    {
      id: 2,
      name: "Sophie Moore",
      position: "Community Lead",
      image: "/Images/p2.jpg",
    },
    {
      id: 3,
      name: "Alex Turner",
      position: "Operations",
      image: "/Images/p3.jpg",
    },
  ];
  const featuredIcons = [
    { src: Icon1, alt: "Icon1" },
    { src: Icon2, alt: "Icon2" },
    { src: Icon3, alt: "Icon3" },
    { src: Icon4, alt: "Icon4" },
    { src: Icon5, alt: "Icon5", className: "max-sm:col-span-2 max-sm:mx-auto" },
  ];
  const iconContainerStyle =
    "flex w-[184px] h-[33px] max-sm:w-[134px] max-sm:h-[24px] items-start flex-shrink-0";

  return (
    <div className="px-[133px] max-sm:px-4 grid mb-[230px] max-sm:mb-[80px]">
      <SectionTitle
        title="Our Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies."
      />
      <div className="flex justify-between max-sm:flex-col max-sm:gap-[16px] items-start mt-[49px] max-sm:mt-[24px] mb-[127px] max-sm:mb-[80px]">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex w-[374px] max-sm:w-[358px] p-6 flex-col items-start gap-8 rounded-[40px] bg-[#010D50]"
          >
            <Image
              src={member.image}
              alt={`${member.name} - ${member.position}`}
              width={327}
              height={400}
              className="rounded-[32px]"
            />
            <div className="flex w-[327px] pr-[54.91px] flex-col justify-center items-start gap-[22.737px]">
              <div className="flex flex-col items-start gap-3">
                <div className="text-white font-semibold text-base leading-4 tracking-wider uppercase">
                  {member.name}
                </div>
                <div className="text-white font-normal text-base leading-4 tracking-wide uppercase">
                  {member.position}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="inline-flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-white text-center text-[42px]  max-sm:text-[28px] font-bold leading-[55.02px] max-sm:leading-[36px] max-sm:w-[305px]">
            Investors
          </h2>
          <p className="text-white text-center text-lg max-sm:text-[16px] font-normal leading-[32.004px] max-sm:leading-[26px] w-[496px] max-sm:w-[330px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
            lorem purus justo, ultricies.
          </p>
        </div>
        <div className="flex justify-between items-start max-sm:items-center max-sm:justify-center max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:self-center">
          {featuredIcons.map((icon, index) => (
            <div
              key={index}
              className={`${iconContainerStyle} ${icon.className || ""}`}
            >
              <Image src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
