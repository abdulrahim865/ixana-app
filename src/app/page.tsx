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
import ProductStoriesSection from "./utils/pages/home/sections/ProductStoriesSection";
import HomeOurMissionHighlighted from "./utils/pages/home/sections/HomeBreakQuoteHighlighted";

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
        <ProductStoriesSection />

        <HomeBreakThrough />
        <HomeOurMission />
      </div>
      <HomeOurMissionHighlighted />
      <HomeBlogSection />
      <PFooter />
    </main>
  );
}
