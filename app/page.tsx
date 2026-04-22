import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Categories } from '@/components/Categories';
import { EventsGrid } from '@/components/EventsGrid';
import { Benefits } from '@/components/Benefits';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Categories />
        <EventsGrid />
        <Benefits />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
