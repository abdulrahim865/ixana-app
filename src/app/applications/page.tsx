import { PFooter } from "../utils/components/PFooter";
import { PNavBar } from "../utils/components/PNavBar";
import ApplicationsHighlighted from "../utils/pages/applications/ApplicationsHighlighted";
import ApplicationsTopHeader from "../utils/pages/applications/ApplicationsTopHeader";
import ApplicationsWhitePaperSection from "../utils/pages/applications/ApplicationsWhitePaperSection";
import ApplicationsWhyUse from "../utils/pages/applications/ApplicationsWhyUse";
import ProductStoriesSection from "../utils/pages/products/ProductStoriesSection";

export default function Applications() {
  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar isProductView />
      <ApplicationsTopHeader />
      <div className="flex flex-col items-center px-12 md:px-0">
        <ApplicationsWhyUse />
      </div>
      <ApplicationsHighlighted />
      <div className="flex flex-col items-center px-12 md:px-0">
        <ApplicationsWhitePaperSection />
      </div>

      <PFooter />
    </main>
  );
}
