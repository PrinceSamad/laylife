import ScrollProgress from '@/components/ScrollProgress';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import ServicesSection from '@/components/ServicesSection';
import ParallaxBanner from '@/components/ParallaxBanner';
import ImpactSection from '@/components/ImpactSection';
import NewsSection from '@/components/NewsSection';
import CareersSection from '@/components/CareersSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Fixed Header */}
      <Header />
      
      {/* Hero Section - Full viewport with animated content */}
      <HeroSection />
      
      {/* Mission & About Section */}
      <MissionSection />
      
      {/* Animated Divider */}
      <div className="section-divider" />
      
      {/* Services / What We Do */}
      <ServicesSection />
      
      {/* Parallax Quote Banner */}
      <ParallaxBanner />
      
      {/* Impact Section */}
      <ImpactSection />
      
      {/* News & Insights */}
      <NewsSection />
      
      {/* Careers Section */}
      <CareersSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
