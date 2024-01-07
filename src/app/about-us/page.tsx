import { PFooter } from "../utils/components/PFooter";
import { PNavBar } from "../utils/components/PNavBar";
import AboutUsExperience from "../utils/pages/aboutus/AboutUsExperience";
import AboutUsJoinTeam from "../utils/pages/aboutus/AboutUsJoinTeam";
import AboutUsPeople from "../utils/pages/aboutus/AboutUsPeople";
import AboutUsTopHeader from "../utils/pages/aboutus/AboutUsTopHeader";
import AboutsHighlitedSection from "../utils/pages/aboutus/AboutsHighlitedSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar />
      <AboutUsTopHeader />
      <div className="flex flex-col items-center w-full px-12 pt-12 md:px-0">
        <AboutsHighlitedSection />
        <AboutUsExperience />
        <AboutUsPeople />
        <AboutUsJoinTeam />
      </div>
      <PFooter />
    </main>
  );
}
