import HeroSection from '@/src/components/sections/HeroSection';
import ProblemSection from '@/src/components/sections/ProblemSection';
import SolutionSection from '@/src/components/sections/SolutionSection';
import SocialProofSection from '@/src/components/sections/SocialProofSection';
import FinalCTASection from '@/src/components/sections/FinalCTASection';
import Footer from '@/src/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
