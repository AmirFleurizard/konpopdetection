import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Stethoscope, Microscope } from "lucide-react";

const Donate = () => {
  const impactAreas = [
    {
      icon: Stethoscope,
      title: "Equipment & Training",
      description: "Provide screening equipment and train healthcare workers in underserved areas.",
    },
    {
      icon: Microscope,
      title: "AI Development",
      description: "Continue improving our AI technology for even more accurate early detection.",
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Expand our reach to more communities that lack access to oral cancer screening.",
    },
  ];

  return (
    <section id="donate" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary mb-6">
              <Heart className="w-10 h-10 text-primary-foreground fill-current" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Help Us Save Lives
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your donation directly supports our mission to bring AI-powered oral cancer 
              screening to underserved communities. Every contribution makes a difference.
            </p>
          </div>

          {/* Impact Areas */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="pt-6 pb-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2 text-card-foreground">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Donation CTA */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 shadow-[var(--shadow-elevated)]">
            <CardContent className="pt-10 pb-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Make a Donation Today
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join us in our fight against oral cancer. Your support helps us reach more 
                communities and save more lives through early detection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="donate" 
                  size="lg"
                  className="text-lg"
                  onClick={() => alert('Donation functionality would be integrated with your preferred payment processor')}
                >
                  <Heart className="fill-current" />
                  Donate Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg"
                  onClick={() => alert('Contact form would be implemented here')}
                >
                  Contact Us
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Atenas is a registered nonprofit organization. Your donation may be tax-deductible.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Donate;
