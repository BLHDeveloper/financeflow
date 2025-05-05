import React from "react";
import Image from "next/image";
const Section2 = () => {
  const sections = [
    {
      title: "Our mission",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Parturient lorem purus justo, ultricies. Sollicitudin odio
      elementum urna placerat lacus, vulputate. Non malesuada viverra et
      ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
      Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
      lacus, fermentum arcu.

      Vulputate pellentesque proin facilisis dignissim gravida sed
      faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
      nisl, in quis nulla tellus suscipit id. Semper velit odio cras
      pretium tristique habitant. Elit eu penatibus congue orci turpis.
      Enim diam id.`,
    },
    {
      title: "Our story",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Parturient lorem purus justo, ultricies. Sollicitudin odio
      elementum urna placerat lacus, vulputate. Non malesuada viverra et
      ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
      Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
      lacus, fermentum arcu.

      Vulputate pellentesque proin facilisis dignissim gravida sed
      faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
      nisl, in quis nulla tellus suscipit id. Semper velit odio cras
      pretium tristique habitant. Elit eu penatibus congue orci turpis.
      Enim diam id.`,
    },
  ];
  // Composant réutilisable pour chaque section de texte
  const ContentSection = ({ title, content }) => (
    <div className="flex flex-col items-start gap-4">
      <h2 className="text-white text-[42px] max-sm:text-[28px] font-bold leading-[55px] max-sm:leading-[36px] max-sm:w-[305px]">
        {title}
      </h2>
      <p className="text-white text-[18px] max-sm:text-[16px] font-normal leading-[32px] max-sm:leading-[26px] w-[607px] max-sm:w-[330px]">
        {content.split("\n\n").map((paragraph, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <React.Fragment>
                <br />
                <br />
              </React.Fragment>
            )}
            {paragraph}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
  return (
    <>
      <div className="px-[133px] max-sm:px-4 flex max-sm:flex-col overflow-hidden items-start gap-[122px] max-sm:gap-[64px] mb-[180px] max-sm:mb-[80px]">
        <div className="flex flex-col items-start gap-[78px]">
          {sections.map((section, index) => (
            <ContentSection
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
        <Image
          src="/Images/planet.svg"
          alt="planet"
          width={655}
          height={633}
          className="max-sm:w-[412.588px] max-sm:h-[398.901px]"
        />
      </div>
    </>
  );
};

export default Section2;
