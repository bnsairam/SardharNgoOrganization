import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import Donation from "@/components/Donation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Achievements />
        <Gallery />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
