import { Target, Users, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  const values = [
    {
      icon: Target,
      title: "Early Detection",
      description: "AI-powered screening technology that identifies potential oral cancer indicators quickly and accurately.",
    },
    {
      icon: Users,
      title: "Accessible Care",
      description: "Bringing advanced screening to underserved communities where healthcare access is limited.",
    },
    {
      icon: DollarSign,
      title: "Affordable Solution",
      description: "Cost-effective technology that makes screening financially accessible to everyone who needs it.",
    },
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Atenas is dedicated to democratizing oral cancer screening through artificial intelligence. 
            We believe that early detection should not be a privilege—it should be a right accessible to all.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index} 
                className="border-border bg-card hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
