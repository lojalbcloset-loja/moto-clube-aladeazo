import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import KeyPoints from "@/components/landing/KeyPoints";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import PurchaseCard from "@/components/landing/PurchaseCard";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div data-testid="landing-page" className="min-h-screen bg-surface-base">
      <Header />
      <Hero />
      <About />
      <KeyPoints />
      <Testimonials />
      <FAQ />
      <PurchaseCard />
      <Footer />
    </div>
  );
}
