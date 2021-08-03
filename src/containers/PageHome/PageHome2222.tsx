import React from "react";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionVideos from "./SectionVideos";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import { Helmet } from "react-helmet";
import SectionHero from "components/SectionHero/SectionHero";
import Vector1 from "images/Vector1.png";
import SectionLargeSlider from "./SectionLargeSlider";
import SectionSliderCollections from "components/SectionSliderCollections";
import SectionGridFeatureNFT from "./SectionGridFeatureNFT";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionOurFeatures from "components/SectionOurFeatures/SectionOurFeatures";

function PageHome2() {
  return (
    <div className="nc-PageHome2 relative overflow-hidden">
      <Helmet>
        <title>Ciscryp || NFT Marketplace Template</title>
      </Helmet>
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        {/* SECTION HERO */}
        <SectionHero
          className="pb-10"
          heading={
            <span>
              Discover 🖼
              <br /> collect, and sell <br /> extraordinary {` `}
              <span className="relative pr-3">
                <img
                  className="w-full absolute bottom-3 -left-1"
                  src={Vector1}
                  alt="Vector1"
                />
                <span className="relative">NFTs</span>
              </span>
            </span>
          }
        />

        {/* SECTION 2 */}
        <SectionHowItWork />
      </div>

      {/* SECTION LAERGE SLIDER */}
      <div className="bg-neutral-100/80 dark:bg-black/20 py-32">
        <div className="container">
          <SectionLargeSlider />
        </div>
      </div>

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        {/* SECTION 1 */}
        <SectionSliderCategories />

        {/* SECTION 2 */}
        <SectionSliderCollections />

        {/* SECTION */}
        <div className="relative py-24">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox boxCard="box3" />
        </div>

        {/* SECTION2 */}
        <SectionOurFeatures />

        {/* SECTION */}
        <SectionGridFeatureNFT />

        {/* SECTION */}
        <div className="relative py-24">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>

        {/* SECTION */}
        <SectionSubscribe2 />

        {/* SECTION */}
        <SectionVideos />

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>
      </div>
    </div>
  );
}

export default PageHome2;
