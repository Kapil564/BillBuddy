import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import Features from "./Features/page";
import HowItWorks from "./HowItWorks/page";
import AboutUs from "./AboutUs/page";
import Testimonials from "./Testimonials/page";
import FAQ from "./FAQ/page";
import FinalCta from "./FinalCta/page";
import Footer from "./Footer/page";

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

