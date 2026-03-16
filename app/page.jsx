import Navbar from "@/components/LandingComponent/Navbar";
import Hero from "@/components/LandingComponent/HeroSection";
import Features from "@/components/LandingComponent/Feature";
import HowItWorks from "@/components/LandingComponent/HowItWorks";
import AboutUs from "@/components/LandingComponent/AboutUs";
import Testimonials from "@/components/LandingComponent/Testimonials";
import FAQ from "@/components/LandingComponent/Faq";
import FinalCta from "@/components/LandingComponent/FinalCta";
import Footer from "@/components/LandingComponent/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AboutUs />
        <Testimonials />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </div>);

}