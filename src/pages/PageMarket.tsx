import React, { FC } from "react";
import { Helmet } from "react-helmet";
import CardNFT1 from "components/CardNFT1";
import Pagination from "shared/Pagination/Pagination";
// import ButtonPrimary from "shared/Button/ButtonPrimary";
import TabFilters from "components/TabFilters";

export interface PageMarketProps {
  className?: string;
}

const PageMarket: FC<PageMarketProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageCollection  ${className}`}
      data-nc-id="PageCollection"
    >
      <Helmet>
        <title>Market || Mind Chill</title>
      </Helmet>

      {/* HEADER */}
      {/* ====================== END HEADER ====================== */}

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-20 lg:space-y-28">
        <main>
          {/* TABS FILTER */}
          <TabFilters />

          {/* LOOP ITEMS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10  mt-8 lg:mt-10">
            {Array.from("11111111").map((_, index) => (
              <CardNFT1 key={index} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            {/* <ButtonPrimary loading>Show me more</ButtonPrimary> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageMarket;
