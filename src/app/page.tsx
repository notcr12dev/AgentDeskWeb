import { Hero } from "./components/hero/Hero";
import { ProblemSolutionCorridor } from "./components/sections/ProblemSolutionCorridor";
import { SolutionTail } from "./components/sections/SolutionSection";
import { Features } from "./components/sections/Features";
import { IntegrationSection } from "./components/sections/IntegrationSection";
import { CTASection } from "./components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolutionCorridor />
      <SolutionTail />
      <Features />
      <IntegrationSection />
      {/* <SocialProofSection /> */}
      {/* <Stats /> */}
      <CTASection />
    </>
  );
}
