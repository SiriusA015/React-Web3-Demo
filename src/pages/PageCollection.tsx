import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import collectionBanner from "images/nfts/collectionBanner.png";

export interface PageCollectionProps {
  className?: string;
}

const PageCollection: FC<PageCollectionProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageCollection  ${className}`}
      data-nc-id="PageCollection"
    >
      <Helmet>
        <title>Collection || Ciscryp NFT Template</title>
      </Helmet>

      {/* HEADER */}
      <div className="w-full">
        <div className="relative w-full h-40 md:h-60 2xl:h-72">
          <NcImage
            containerClassName="absolute inset-0"
            src={collectionBanner}
            className="object-cover w-full h-full"
          />
        </div>

      </div>
      {/* ====================== END HEADER ====================== */}
    </div>
  );
};

export default PageCollection;
