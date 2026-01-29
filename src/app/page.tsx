import { Header, Footer } from '@/components/layout';
import {
  Hero,
  About,
  HowItWorks,
  Features,
  Stats,
  AppPreview,
  Partners,
  Team,
  Testimonials,
  FAQ,
  CTA,
  Contact,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Features />
        <Stats />
        <AppPreview />
        <Partners />
        <Team />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
