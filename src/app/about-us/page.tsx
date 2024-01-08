import { PFooter } from "../utils/components/PFooter";
import { PNavBar } from "../utils/components/PNavBar";
import AboutUsExperience from "../utils/pages/aboutus/AboutUsExperience";
import AboutUsJoinTeam from "../utils/pages/aboutus/AboutUsJoinTeam";
import AboutUsOurSupporters from "../utils/pages/aboutus/AboutUsOurSupporters";
import AboutUsPeople from "../utils/pages/aboutus/AboutUsPeople";
import AboutUsTopHeader from "../utils/pages/aboutus/AboutUsTopHeader";
import AboutsHighlitedSection from "../utils/pages/aboutus/AboutsHighlitedSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar />
      {/* <AboutUsTopHeader /> */}
      <AboutsHighlitedSection />

      <div className="flex flex-col items-center w-full px-12 pt-12 mb-12 md:px-0">
        <AboutUsExperience />
        <AboutUsPeople />
      </div>
      <AboutUsJoinTeam />
      <AboutUsOurSupporters />
      <PFooter />
    </main>
  );
}
