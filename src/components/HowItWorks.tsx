import { Scan, Brain, FileCheck } from "lucide-react";
import aiScreeningIcon from "@/assets/ai-screening-icon.png";

const HowItWorks = () => {
  const steps = [
    {
      icon: Scan,
      number: "01",
      title: "Simple Screening",
      description: "Non-invasive oral imaging using standard equipment available in community clinics.",
    },
    {
      icon: Brain,
      number: "02",
      title: "AI Analysis",
      description: "Our advanced AI analyzes images in seconds, identifying potential indicators with high accuracy.",
    },
    {
      icon: FileCheck,
      number: "03",
      title: "Immediate Results",
      description: "Healthcare providers receive instant analysis to determine if further evaluation is needed.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-6">
            <img 
              src={aiScreeningIcon} 
              alt="AI Screening" 
              className="w-20 h-20 mx-auto"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How Atenas Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered platform makes oral cancer screening fast, accurate, and accessible.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative"
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-accent" />
                  )}
                  
                  <div className="text-center">
                    <div className="relative inline-block mb-6">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
                        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                          <Icon className="w-12 h-12 text-primary" />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
