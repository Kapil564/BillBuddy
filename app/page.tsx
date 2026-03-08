import Navbar from "../components/Navbar/page";
import Hero from "../components/Hero/page";
import Features from "./Features/page";
import HowItWorks from "../components/HowItWorks/page";
import AboutUs from "../components/AboutUs/page";
import Testimonials from "../components/Testimonials/page";
import FAQ from "../components/FAQ/page";
import FinalCta from "../components/FinalCta/page";
import Footer from "../components/Footer/page";

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
    </div>
  );
}
