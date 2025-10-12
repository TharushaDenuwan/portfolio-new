import HeroSection from '@/features/hero/hero';
import CVDownload from '@/features/cv/cv';
import Navigation from '@/features/navigation/navigation';
import AboutSection from '@/features/about/about';
import TechStackSection from '@/features/techstack/techstack';
import ProjectsSection from '@/features/projects/projects';
import CertificatesSection from '@/features/certificates/certificates';
import ConnectSection from '@/features/connect/connect';
import Footer from '@/features/footer/footer';

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection/>
      <CVDownload/>
      <AboutSection/>
      <TechStackSection/>
      < ProjectsSection/>
      <CertificatesSection/>
      <ConnectSection/>
      <Footer/>
    </div>
  );
}
