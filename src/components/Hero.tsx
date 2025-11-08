import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Healthcare professionals" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
            Kon Pop Detection
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            AI-Powered Oral Cancer Screening for Everyone
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Making early detection accessible and affordable in underserved communities. 
            Because everyone deserves the chance for early intervention.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('mission')}
              className="group"
            >
              Learn Our Mission
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="donate" 
              size="lg"
              onClick={() => scrollToSection('donate')}
              className="group"
            >
              <Heart className="fill-current" />
              Support Our Cause
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
