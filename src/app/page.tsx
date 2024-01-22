import { PFooter } from "./utils/components/PFooter";
import { PNavBar } from "./utils/components/PNavBar";
import HomeBlogSection from "./utils/pages/home/sections/HomeBlogSection";
import HomeOurMission from "./utils/pages/home/sections/HomeOurMission";
import HomeBreakThrough from "./utils/pages/home/sections/HomeBreakThrough";
import HomeLearnMoreSection from "./utils/pages/home/sections/HomeLearnMoreSection";
import HomeTopMainView from "./utils/pages/home/sections/HomeTopMainView";
import HomeWatchDemo from "./utils/pages/home/sections/HomeWatchDemo";
import ProductFeaturesSection from "./utils/pages/home/sections/ProductFeaturesSection";
import ProductSpecSection from "./utils/pages/home/sections/ProductSpecSection";
import HomeOurMissionHighlighted from "./utils/pages/home/sections/HomeBreakQuoteHighlighted";
import HomeOurClients from "./utils/pages/home/sections/HomeOurClients";
import HomeProductStoriesSection from "./utils/pages/home/sections/HomeProductStoriesSection";
import ProductFeaturedIn from "./utils/pages/home/sections/ProductFeaturedIn";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar isHomeView />
      <HomeTopMainView />
      <HomeWatchDemo />
      <div className="flex flex-col items-center w-full px-6 md:px-0">
        <HomeLearnMoreSection />
        <ProductSpecSection />
        <ProductFeaturesSection />
        <ProductFeaturedIn />

        <HomeBreakThrough />
        <HomeProductStoriesSection />

        <HomeOurMission />
      </div>
      <HomeOurMissionHighlighted />
      <HomeBlogSection />
      <HomeOurClients />
      <PFooter />
    </main>
  );
}
