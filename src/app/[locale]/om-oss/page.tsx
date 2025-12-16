// app/[locale]/om-oss/page.tsx

import AboutHero from '@/app/components/omoss/AboutHero';
import AboutStory from '@/app/components/omoss/AboutStory';
import AboutValues from '@/app/components/omoss/AboutValues';
import AboutJourney from '@/app/components/omoss/AboutJourney';
import AboutTeam from '@/app/components/omoss/AboutTeam';
import AboutOffer from '@/app/components/omoss/AboutOffer';
import AboutCta from '@/app/components/omoss/AboutCta';

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
