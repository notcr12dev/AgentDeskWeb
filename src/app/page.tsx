import { Hero } from "./components/hero/Hero";
import { ProblemSection } from "./components/sections/ProblemSection";
import { SolutionSection } from "./components/sections/SolutionSection";
import { Features } from "./components/sections/Features";
import { IntegrationSection } from "./components/sections/IntegrationSection";
import { SocialProofSection } from "./components/sections/SocialProofSection";
import { Stats } from "./components/sections/Stats";
import { CTASection } from "./components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <Features />
      <IntegrationSection />
      {/* <SocialProofSection /> */}
      {/* <Stats /> */}
      <CTASection />
    </>
  );
}
