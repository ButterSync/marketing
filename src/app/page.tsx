import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import CtaSection from "@/components/CtaSection";
import FounderVideoSection from "@/components/FounderVideoSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FounderVideoSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
