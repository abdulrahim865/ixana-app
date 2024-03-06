import { PFooter } from "../utils/components/PFooter";
import { PNavBar } from "../utils/components/PNavBar";
import ApplicationsDemoVideos from "../utils/pages/applications/ApplicationsDemoVideos";
import ApplicationsExamples from "../utils/pages/applications/ApplicationsExamples";
import ApplicationsHighlighted from "../utils/pages/applications/ApplicationsHighlighted";
import ApplicationsTopHeader from "../utils/pages/applications/ApplicationsTopHeader";
import ApplicationsWhitePaperSection from "../utils/pages/applications/ApplicationsWhitePaperSection";
import ApplicationsWhyUse from "../utils/pages/applications/ApplicationsWhyUse";

export default function Applications() {
  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar isProductView />
      <ApplicationsTopHeader />
      <div className="max-w-full md:max-w-[70%] lg:w-[1200px] flex flex-col items-center px-12 md:px-0">
        <ApplicationsWhyUse />
      </div>
      <ApplicationsHighlighted />

      <ApplicationsExamples />

      <div className="flex flex-col items-center md:px-0">
        <ApplicationsWhitePaperSection />
      </div>

      <ApplicationsDemoVideos />

      <PFooter />
    </main>
  );
}
