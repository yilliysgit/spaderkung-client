import PizzaHero from '../../components/hero/Pizzahero';
import PopularDishes from '../../components/home/PopularDishes';
import PromoGrid from '../../components/home/PromoGrid';
import Features from '../../components/home/Features';
import EventSection from '../../components/home/EventSection';

export default function HomePage() {
  return (
    <>
      <PizzaHero />
      <PopularDishes />
      <PromoGrid />
      <Features />
      <EventSection />
    </>
  );
}
