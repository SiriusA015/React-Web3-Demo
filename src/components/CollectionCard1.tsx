import { nftsImgs } from "contains/fakeData";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import NcImage from "shared/NcImage/NcImage";

export interface CollectionCard1Props {
  className?: string;
  title?: string;
  imgs?: string[];
  pathTo?: string;
}

const CollectionCard1: FC<CollectionCard1Props> = ({
  className,
  title = "title",
  imgs = [nftsImgs[9], nftsImgs[10], nftsImgs[11], nftsImgs[8]],
  pathTo = ""
}) => {
  return (
    <div
      className={`CollectionCard relative p-4 rounded-2xl overflow-hidden h-[410px] flex flex-col group ${className}`}
    >
      <NcImage containerClassName="absolute inset-0" src={imgs[0]} />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 group-hover:h-full to-transparent "></div>

      <div className="relative mt-auto">
        {/* TITLE */}
        <h2 className="font-semibold text-3xl mt-1.5 text-white">
          {title}
        </h2>
        {/* LISTS */}
        <div className="grid grid-cols-3 gap-4 mt-5">
          <NcImage
            containerClassName="w-full h-20 rounded-xl overflow-hidden"
            src={imgs[1]}
          />
          <NcImage
            containerClassName="w-full h-20 rounded-xl overflow-hidden"
            src={imgs[2]}
          />
          <NcImage
            containerClassName="w-full h-20 rounded-xl overflow-hidden"
            src={imgs[3]}
          />
        </div>
      </div>
      <a href={pathTo} className="absolute inset-0"></a>
    </div>
  );
};

export default CollectionCard1;
