import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import nursePortrait from "@/assets/field/nurse-portrait.jpg";
import harvardLogo from "@/assets/harvard-logo.png";
import mitLogo from "@/assets/mit-logo.png";
import googleLogo from "@/assets/google-logo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-surface-muted to-background">
      {/* subtle grid background */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 animate-fade-in">
            <span className="eyebrow mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              AI-Powered Oral Health
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-foreground mt-4 mb-6">
              Early detection, <span className="text-primary italic">for everyone.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Kon Pop Detection brings clinical-grade AI oral cancer screening to communities that healthcare has
              historically passed over — fast, affordable, and built for the field.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button size="lg" onClick={() => scrollToSection("contact")} className="group">
                Request a Demo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("how-it-works")}>
                See how it works
              </Button>
            </div>

            {/* Trust strip */}
            <div className="pt-6 border-t border-border/70">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">
                Research foundations
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-80">
                <img src={harvardLogo} alt="Harvard" className="h-7 object-contain grayscale" />
                <img src={mitLogo} alt="MIT" className="h-7 object-contain grayscale" />
                <img src={googleLogo} alt="Google" className="h-6 object-contain grayscale" />
              </div>
            </div>
          </div>

          {/* Photo composition */}
          <div className="lg:col-span-5 relative animate-fade-in">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] ring-1 ring-border">
                <img src={heroImage} alt="Healthcare professional" className="w-full h-full object-cover" />
              </div>

              {/* Overlapping field photo */}
              <div className="absolute -bottom-8 -left-10 w-44 h-44 rounded-xl overflow-hidden shadow-[var(--shadow-elevated)] ring-4 ring-background hidden md:block">
                <img src={nursePortrait} alt="Nurse at clinic" className="w-full h-full object-cover" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -top-6 -right-6 bg-surface rounded-xl shadow-[var(--shadow-elevated)] p-4 ring-1 ring-border w-48 hidden md:block">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    In the field
                  </span>
                </div>
                <div className="font-display text-2xl font-semibold text-foreground">1,000+</div>
                <div className="text-xs text-muted-foreground">community screenings completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
