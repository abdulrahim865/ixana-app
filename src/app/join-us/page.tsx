import { PFooter } from "../utils/components/PFooter";
import { PNavBar } from "../utils/components/PNavBar";
import JoinUsReachOutHighlighted from "../utils/pages/join-us/JoinUsReachOutHighlighted";
import JoinUsTopHeader from "../utils/pages/join-us/JoinUsTopHeader";
import JoinUsVacanciesWhyUse from "../utils/pages/join-us/JoinUsVacanciesWhyUse";

export default function JoinUsPage() {
  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar isProductView />
      <JoinUsTopHeader />
      <div className="flex flex-col items-center px-12 md:px-0">
        <JoinUsVacanciesWhyUse />
      </div>
      <div className="flex w-full pb-12">
        <JoinUsReachOutHighlighted />
      </div>

      <PFooter />
    </main>
  );
}
