import React, { FC } from "react";
import Heading from "components/Heading/Heading";
import Pagination from "shared/Pagination/Pagination";
import ButtonPrimary from "shared/Button/ButtonPrimary";

import Card3 from "./Card3";

//
export interface SectionLatestPostsProps {
  className?: string;
  postCardName?: "card3";
}

const SectionLatestPosts: FC<SectionLatestPostsProps> = ({
  postCardName = "card3",
  className = "",
}) => {
  return (
    <div className={`nc-SectionLatestPosts relative ${className}`}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
          <Heading>Chill News 🎈</Heading>
          <div className={`grid gap-6 md:gap-8 grid-cols-1`}>
            {[1, 1, 1, 1, 1, 1].map((_, index) => (
              <Card3 key={index} className="" />
            ))}
          </div>
          <div className="flex flex-col mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>Show me more</ButtonPrimary>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionLatestPosts;
