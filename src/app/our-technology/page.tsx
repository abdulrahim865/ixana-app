import { PFooter } from "../utils/components/PFooter";
import { PNavBar } from "../utils/components/PNavBar";
import TechnologyHeadPhoneReview from "../utils/pages/technology/TechnologyHeadPhoneReview";
import TechnologyImpact from "../utils/pages/technology/TechnologyImpact";
import TechnologyInnovation from "../utils/pages/technology/TechnologyInnovation";
import TechnologyProductSpecSection from "../utils/pages/technology/TechnologyProductSpecSection";
import { TechnologyProducts } from "../utils/pages/technology/TechnologyProducts";
import TechnologyTopHeader from "../utils/pages/technology/TechnologyTopHeader";
import TechnologyWhyWifi from "../utils/pages/technology/TechnologyWhyWifi";
import TechnologyWifiFAQ from "../utils/pages/technology/TechnologyWifiFAQ";
import TechnologyWifiToday from "../utils/pages/technology/TechnologyWifiToday";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar />
      <TechnologyTopHeader />
      <div className="flex flex-col items-center px-12 md:px-0">
        <TechnologyInnovation />
        <TechnologyProductSpecSection />
        <TechnologyWhyWifi />
        <TechnologyImpact />
        <TechnologyWifiToday />

        <TechnologyWifiFAQ />
        <TechnologyProducts />
      </div>
      {/* <TechnologyHeadPhoneReview /> */}
      {/* <HomeWatchDemo />
      <HomeLearnMoreSection />
      <ProductSpecSection />
      <ProductFeaturesSection />
      <ProductStoriesSection />

      <HomeBreakThrough />
      <HomeOurMission />
      <HomeOurMissionHighlighted />
      <HomeBlogSection /> */}
      <PFooter />
    </main>
  );
}
