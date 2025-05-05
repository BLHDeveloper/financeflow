import React from "react";
import Image from "next/image";

const Section3 = () => {
  // Données de la timeline
  const timelineData = [
    {
      year: "2014",
      title: "Announcement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.",
    },
    {
      year: "2016",
      title: "Announcement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.",
    },
    {
      year: "2018",
      title: "Announcement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.",
    },
    {
      year: "2020",
      title: "Announcement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.",
    },
  ];

  return (
    <>
      <div className="px-[133px] max-sm:px-4 flex sm:justify-between max-sm:flex-col items-start mb-[120px] max-sm:gap-[40px] max-sm:mb-[80px]">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-white text-[42px] max-sm:text-[28px] font-bold leading-[55px] max-sm:leading-[36px] max-sm:w-[305px]">
            Timeline
          </h2>
          <p className="text-white text-[18px] max-sm:text-[16px] font-normal leading-[32px] max-sm:leading-[26px] w-[382px] max-sm:w-[330px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div className="inline-flex flex-col items-start gap-20 max-sm:gap-[56px]">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-[54px] pb-10 border-b border-white max-sm:self-stretch"
            >
              <div className="w-6 h-6 rounded-full bg-white"></div>
              <div className="flex flex-col items-start gap-4 max-sm:flex-[1_0_0]">
                <h2 className="text-white font-bold text-[28px] leading-[29.988px] max-sm:leading-[36px] sm:tracking-[0.28px]  max-sm:self-stretch">
                  {item.year}
                </h2>
                <div className="flex flex-col items-start gap-3">
                  <div className="text-white font-bold text-[18px] leading-[25.992px] tracking-[0.9px] uppercase max-sm:self-stretch">
                    {item.title}
                  </div>
                  <div className="text-white font-normal text-[18px] max-sm:text-[16px] leading-[32.004px] max-sm:leading-[26px] sm:w-[600px] max-sm:self-stretch">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section3;
