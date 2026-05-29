import { Scan, Brain, FileCheck } from "lucide-react";
import intake1 from "@/assets/field/clinic-intake-1.jpg";
import intake2 from "@/assets/field/clinic-intake-2.jpg";
import intake3 from "@/assets/field/clinic-intake-3.jpg";

const steps = [
  {
    icon: Scan,
    number: "01",
    title: "Simple Screening",
    description:
      "Non-invasive oral imaging using a smartphone or low-cost device in any community clinic.",
    image: intake1,
  },
  {
    icon: Brain,
    number: "02",
    title: "AI Analysis",
    description:
      "Our model analyzes images on-device in seconds, flagging potential indicators with clinical-grade accuracy.",
    image: intake2,
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Immediate Triage",
    description:
      "Healthcare providers receive a structured report and a clear next-step recommendation at the point of care.",
    image: intake3,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-surface-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow">How it works</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mt-4 mb-5 leading-[1.1]">
            From image to triage in seconds.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A workflow designed for real clinical environments — not lab demos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="bg-surface p-8 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-display text-3xl text-muted-foreground/50 font-medium">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {step.description}
                </p>
                <div className="aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-border">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
