import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
