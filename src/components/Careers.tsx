import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, FlaskConical } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();

  const roles = [
    {
      icon: Code,
      title: "Engineering",
      description: "Build AI-powered tools that detect oral cancer early and save lives.",
    },
    {
      icon: FlaskConical,
      title: "Research",
      description: "Advance our machine learning models and clinical validation studies.",
    },
    {
      icon: Briefcase,
      title: "Operations & Outreach",
      description: "Help us expand into underserved communities and manage partnerships.",
    },
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary mb-6">
              <Briefcase className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Join Our Team</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're building a team passionate about using technology to improve healthcare access.
              Join our waitlist to be the first to know when positions open.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="pt-6 pb-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2 text-card-foreground">{role.title}</h3>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 shadow-[var(--shadow-elevated)]">
            <CardContent className="pt-10 pb-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Interested in Working With Us?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're not actively hiring yet, but we'd love to hear from you. Join our career waitlist and we'll reach out when opportunities arise.
              </p>
              <Button
                variant="hero"
                size="lg"
                className="text-lg"
                onClick={() => navigate("/careers")}
              >
                <Briefcase className="w-5 h-5" />
                Join the Waitlist
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Careers;
