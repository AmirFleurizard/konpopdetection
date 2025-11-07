import { Card, CardContent } from "@/components/ui/card";
import communityIcon from "@/assets/community-icon.png";

const Impact = () => {
  const stats = [
    {
      number: "450,000+",
      label: "New oral cancer cases annually worldwide",
      highlight: true,
    },
    {
      number: "66%",
      label: "5-year survival rate when detected early",
      highlight: false,
    },
    {
      number: "30%",
      label: "Lower screening rates in underserved communities",
      highlight: true,
    },
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-6">
            <img 
              src={communityIcon} 
              alt="Community Impact" 
              className="w-20 h-20 mx-auto"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Impact We're Making
          </h2>
          <p className="text-lg text-muted-foreground">
            Early detection saves lives. By making screening accessible, we can dramatically 
            improve outcomes in communities that need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className={`border-border bg-card ${
                stat.highlight 
                  ? 'ring-2 ring-primary/20 shadow-[var(--shadow-soft)]' 
                  : ''
              }`}
            >
              <CardContent className="pt-10 pb-10 text-center">
                <div className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-lg">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground italic">
            "Oral cancer is highly treatable when caught early. Our mission is to ensure that 
            geography and economic status are never barriers to early detection."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
