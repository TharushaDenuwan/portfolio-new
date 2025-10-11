import HeroSection from '@/features/hero/hero';
import CVDownload from '@/features/cv/cv';
import Navigation from '@/features/navigation/navigation';
import AboutSection from '@/features/about/about';
import TechStackSection from '@/features/techstack/techstack';

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection/>
      <CVDownload/>
      <AboutSection/>
      <TechStackSection/>
    </div>
  );
}
