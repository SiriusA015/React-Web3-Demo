import React from "react";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { Helmet } from "react-helmet";
import SectionHero from "components/SectionHero/SectionHero";
import SectionSliderCollections from "components/SectionSliderCollections";

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Home || Mind Chill</title>
      </Helmet>
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-20 mt-12 mb-20 sm:space-y-24 sm:my-24 lg:space-y-32 lg:my-32">
        {/* SECTION HERO */}
        <SectionHero
          className="pb-10"
          heading={
            <span>
              Mind Chill NFT<br />
              Marketplace
            </span>
          }
          subHeading="The most chilled out, creative NFT Marketplace, protected by Mind Chill NFT Guardians on a mission to help chill the world out!"
        />

        {/* SECTION 2 */}
        <SectionHowItWork />
      </div>

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        {/* SECTION */}
        <div className="relative py-20 lg:py-28">
          <BackgroundSection />
          <SectionSliderCollections />
        </div>
      </div>
    </div>
  );
}

export default PageHome;
