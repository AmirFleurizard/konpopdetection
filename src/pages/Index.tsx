import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <HowItWorks />
      <Impact />
      <Donate />
      <Footer />
    </div>
  );
};

export default Index;
