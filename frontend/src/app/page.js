import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedProperties from "./components/FeaturedProperties";
import OurServices from "./components/OurServices";
import ClientTestimonials from "./components/ClientTestimonials";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="font-sans">
       
      <Header />
      <main>
        <HeroSection />
        <FeaturedProperties />
        <OurServices />
        <ClientTestimonials />
      </main>
      <Footer />
    </div>
  );
}
