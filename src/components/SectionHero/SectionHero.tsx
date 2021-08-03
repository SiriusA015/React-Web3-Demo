import React, { FC, ReactNode } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import rightImg from "images/about-hero-right.png";
import polygonLogo from "images/polygon-logo.svg";
import { SearchIcon } from "@heroicons/react/outline";

export interface SectionHeroProps {
  className?: string;
  heading?: ReactNode;
  subHeading?: string;
}

const SectionHero: FC<SectionHeroProps> = ({
  className = "",
  heading = "Discover, collect, and sell extraordinary NFTs ",
  subHeading = "Discover the most outstanding NTFs in all topics of life. Creative your NTFs and sell them",
}) => {
  return (
    <div
      className={`nc-SectionHero relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative">
        <div className="w-screen max-w-full xl:max-w-xl space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400 max-w-lg">
            {subHeading}
          </span>
          <span className="block text-lg xl:text-xl text-neutral-900 dark:text-neutral-400 max-w-lg">
            powered By
          </span>
          <img className="w-60" src={polygonLogo} alt="" />
          <div className="pt-7 flex  space-x-4">
            <ButtonPrimary href="/market">
              <span className="">Explore</span>
              <SearchIcon className="w-5 h-5 ml-2.5" />
            </ButtonPrimary>
            <ButtonSecondary href="/connect-wallet">
              <span>Connect Wallet</span>
            </ButtonSecondary>
          </div>
        </div>
        <div className="flex-grow">
          <img className="w-full" src={rightImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
