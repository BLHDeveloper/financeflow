import React from "react";
import GrandTitle from "../../components/grandTitle";
import { PortfolioData } from "../../data/portfolioData";
import Button from "@/components/Button";

const FeatureCard = ({ feature: { title, icon, className } }) => (
  <div className="flex pr-[23px] items-center gap-6">
    <div
      className={`inline-flex ${className} justify-center items-center rounded-[20px] bg-[#0328EE]`}
      aria-hidden="true"
    >
      <div className="flex items-start opacity-[0.8499]">{icon}</div>
    </div>
    <h3 className="text-white text-[18px] font-normal leading-[32.004px]">
      {title}
    </h3>
  </div>
);

// Composant réutilisable pour les cartes de tarification
const PricingCard = ({ plan, features, price, description }) => (
  <div className="flex flex-col items-start gap-10 p-[48px_30px_42px_30px] rounded-[40px] bg-[#010D50] flex-1">
    <div className="flex flex-col items-start gap-4">
      <div className="flex w-[73px] p-[9px_13.931px_9px_14.131px] justify-center items-center rounded-full bg-[#0328EE]">
        <div className="text-white text-[14px] font-medium tracking-[0.7px] leading-[18.004px] uppercase">
          {plan}
        </div>
      </div>
      <h2 className="text-white text-[42px] font-bold leading-[55.02px]">
        ${price} USD
      </h2>
      <div className="text-white text-[18px] font-normal leading-[32.004px] w-full">
        {description}
      </div>
    </div>
    <div className="flex flex-col items-start gap-[54px] self-stretch">
      <div className="flex flex-col items-start gap-4">
        <span className="text-white text-[18px] font-bold uppercase tracking-[0.9px] leading-[25.992px]">
          Features
        </span>
        {features.map((feature, index) => (
          <div key={`feature-${index}`} className="flex items-center gap-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#0328EE]"></div>
            <span className="text-white text-[18px] font-normal leading-[19.998px]">
              {feature}
            </span>
          </div>
        ))}
      </div>
      <Button label="contact us" className="w-full" />
    </div>
  </div>
);

// Données des plans tarifaires
const pricingPlans = [
  {
    plan: "BASIC",
    price: "100",
    description:
      "Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.",
    features: [
      "Everything included in Basic",
      "Trading up to $1MM per month",
      "Windows & macOS App",
      "Premium Support",
    ],
  },
  {
    plan: "PRO",
    price: "200",
    description:
      "Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.",
    features: [
      "Everything included in Basic",
      "Trading up to $1MM per month",
      "Windows & macOS App",
      "Premium Support",
    ],
  },
  {
    plan: "EXPERT",
    price: "300",
    description:
      "Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.",
    features: [
      "Everything included in Basic",
      "Trading up to $1MM per month",
      "Windows & macOS App",
      "Premium Support",
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <div className="px-[133px] max-sm:px-4 mb-[225px] max-sm:mb-[80px] ">
        <GrandTitle
          title="Pricing"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque"
          className="max-sm:my-[48px] mt-[40px] mb-[40px]"
        />
        <div className="flex flex-col gap-[56px] max-sm:gap-[48px]">
          <div className="flex justify-between items-start relative max-sm:inline-flex max-sm:flex-col max-sm:gap-[38px]">
            {PortfolioData.map((feature, index) => (
              <FeatureCard key={`feature-left-${index}`} feature={feature} />
            ))}
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-start gap-[26px] relative">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={`pricing-plan-${index}`}
                plan={plan.plan}
                price={plan.price}
                description={plan.description}
                features={plan.features}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
