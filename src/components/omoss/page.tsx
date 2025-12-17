import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutValues from "./AboutValues";
import AboutJourney from "./AboutJourney";
import AboutTeam from "./AboutTeam";
import AboutOffer from "./AboutOffer";
import AboutCTA from "./AboutCta";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutJourney />
      <AboutTeam />
      <AboutOffer />
      <AboutCTA />
    </div>
  );
}
