import { PFooter } from "../utils/components/PFooter";
import { PNavBar } from "../utils/components/PNavBar";
import TechnologyWifiFAQ from "../utils/pages/technology/TechnologyWifiFAQ";

export default function Home() {
  return (
    <main>
      <PNavBar isProductView />
      <div className="flex flex-col items-center px-12 md:px-0">
        <TechnologyWifiFAQ faqPage={true} />
      </div>
      <PFooter />
    </main>
  );
}
