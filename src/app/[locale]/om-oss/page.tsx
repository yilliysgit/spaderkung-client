// app/[locale]/om-oss/page.tsx

import AboutHero from '@/components/omoss/AboutHero';
import AboutStory from '@/components/omoss/AboutStory';
import AboutValues from '@/components/omoss/AboutValues';
import AboutJourney from '@/components/omoss/AboutJourney';
import AboutTeam from '@/components/omoss/AboutTeam';
import AboutOffer from '@/components/omoss/AboutOffer';
import AboutCta from '@/components/omoss/AboutCta';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutJourney />
      <AboutTeam />
      <AboutOffer />
      <AboutCta />
    </div>
  );
}
