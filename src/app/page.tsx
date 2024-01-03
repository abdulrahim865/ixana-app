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
      <HomeLearnMoreSection />
      <ProductSpecSection />
      <ProductFeaturesSection />
      <ProductStoriesSection />

      <HomeBreakThrough />
      <HomeOurMission />
      <HomeOurMissionHighlighted />
      <HomeBlogSection />
      <PFooter />
    </main>
  );
}
