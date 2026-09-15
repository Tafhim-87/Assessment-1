import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TopUtilityBar from '@/components/layout/TopUtilityBar';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import WorkflowSection from '@/components/sections/WorkflowSection';
import ModulesSection from '@/components/sections/ModulesSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

/**
 * Root page — composes every section.
 * Server Component by default → zero JS for static shells,
 * Framer Motion is only hydrated inside client sections.
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="w-full pt-16 bg-surface">
        <div className="flex flex-col w-full">
          <TopUtilityBar />
          <HeroSection />
          <FeaturesSection />
          <WorkflowSection />
          <ModulesSection />
          <BenefitsSection />
          <FinalCTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}