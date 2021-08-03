import React, { FC, useEffect, useId, useRef } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import CollectionCard1 from "./CollectionCard1";
import GuardianImg0 from "images/nfts/guardians/guardian-0.jpg";
import GuardianImg1 from "images/nfts/guardians/guardian-1.png";
import GuardianImg2 from "images/nfts/guardians/guardian-2.png";
import GuardianImg3 from "images/nfts/guardians/guardian-3.png";

import IslandImg0 from "images/nfts/islands/0.jpg";
import IslandImg1 from "images/nfts/islands/1.jpg";
import IslandImg2 from "images/nfts/islands/2.jpg";
import IslandImg3 from "images/nfts/islands/3.jpg";
import { Link } from "react-router-dom";

export interface SectionSliderCollectionsProps {
  className?: string;
  itemClassName?: string;
  cardStyle?: "style1" | "style2";
}

const SectionSliderCollections: FC<SectionSliderCollectionsProps> = ({
  className = "",
  cardStyle = "style1",
}) => {
  const sliderRef = useRef(null);
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  useEffect(() => {
    if (!sliderRef.current) {
      return;
    }

    const OPTIONS: Glide.Options = {
      perView: 3,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          gap: 28,
          perView: 2.5,
        },
        1024: {
          gap: 20,
          perView: 2.15,
        },
        768: {
          gap: 20,
          perView: 1.5,
        },

        500: {
          gap: 20,
          perView: 1,
        },
      },
    };

    let slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);
    slider.mount();
    // @ts-ignore
    return () => slider.destroy();
  }, [sliderRef, UNIQUE_CLASS]);

  return (
    <div className={`nc-SectionSliderCollections ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`} ref={sliderRef}>
        <Heading
          isCenter={false}
          hasNextPrev
          desc="Check out our Collections!"
        >
          NFT collections
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className={`glide__slide`}>
              <CollectionCard1
                title="MindChill Guardians"
                imgs={[
                  GuardianImg0,
                  GuardianImg1,
                  GuardianImg2,
                  GuardianImg3,
                ]}
                pathTo="https://mind-chill.com/pages/guardians"
              />
            </li>
            <li className={`glide__slide`}>
              <CollectionCard1
                title="Memorial Islands"
                imgs={[IslandImg0, IslandImg1, IslandImg2, IslandImg3]}
                pathTo="https://mind-chill.com/pages/memorial"
              />
            </li>

            <li className={`glide__slide   `}>
              <Link to={"/page-search"} className="block relative group">
                <div className="relative rounded-2xl overflow-hidden h-[410px]">
                  <div className="h-[410px] bg-black/5 dark:bg-neutral-800"></div>
                  <div className="absolute inset-y-6 inset-x-10  flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center relative">
                      <span className="text-xl font-semibold">Collections</span>
                      <svg
                        className="absolute left-full w-5 h-5 ml-2 rotate-45 group-hover:scale-110 transition-transform"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.0701 9.57L12.0001 3.5L5.93005 9.57"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 20.4999V3.66992"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm mt-1">Show me more</span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderCollections;
