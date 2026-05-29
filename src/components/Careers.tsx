import { Button } from "@/components/ui/button";
import { ArrowRight, Code, FlaskConical, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const roles = [
  {
    icon: Code,
    title: "Engineering",
    description:
      "Build AI-powered tools that detect oral cancer early and save lives.",
  },
  {
    icon: FlaskConical,
    title: "Research",
    description:
      "Advance our machine learning models and clinical validation studies.",
  },
  {
    icon: Briefcase,
    title: "Operations & Outreach",
    description:
      "Expand into underserved communities and grow our clinical partnerships.",
  },
];

const Careers = () => {
  const navigate = useNavigate();

  return (
    <section id="careers" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="eyebrow">Careers</span>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mt-4 leading-[1.1]">
                Build the future of accessible healthcare.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're a small team of engineers, researchers, and operators
                obsessed with one outcome — closing the screening gap.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden ring-1 ring-border mb-10">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <div key={role.title} className="bg-surface p-8">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="rounded-xl bg-brand-deep p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                Not actively hiring — but we want to meet you.
              </h3>
              <p className="text-white/70">
                Join the waitlist and we'll reach out when the right role opens.
              </p>
            </div>
            <Button
              size="lg"
              variant="default"
              className="bg-white text-brand-deep hover:bg-white/90 shrink-0"
              onClick={() => navigate("/careers")}
            >
              Join the Waitlist
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
