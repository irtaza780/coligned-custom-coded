import AnnouncementBanner from './components/home/AnnouncementBanner';
import BenefitsSection from './components/home/BenefitsSection';
import BlogSection from './components/home/BlogSection';
import ContactSection from './components/home/ContactSection';
import FaqSection from './components/home/FaqSection';
import FeatureSection from './components/home/FeatureSection';
import Footer from './components/home/Footer';
import HeroSection from './components/home/HeroSection';
import Navbar from './components/home/Navbar';
import SecondaryBenefitsSection from './components/home/SecondaryBenefitsSection';
import StatsSection from './components/home/StatsSection';
import TrustedCompanies from './components/home/TrustedCompanies';

const Index = () => {
  return (
    <div className='bg-white flex flex-col overflow-hidden items-stretch'>
      <AnnouncementBanner text='This is an announcement tagline for you to insert' />

      <div className='z-10 flex w-full flex-col items-stretch px-[78px] max-md:max-w-full max-md:px-5'>
        <Navbar />
        <HeroSection />
        <TrustedCompanies />
        <FeatureSection />
        <BenefitsSection />
        <ContactSection />
        <BlogSection />
        <StatsSection />
        <SecondaryBenefitsSection />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
