import nursePortrait from "@/assets/field/nurse-portrait.jpg";

const Mission = () => {
  const values = [
    {
      number: "01",
      title: "Early Detection",
      description:
        "AI-powered screening that surfaces potential oral cancer indicators in seconds, not weeks.",
    },
    {
      number: "02",
      title: "Accessible Care",
      description:
        "Designed for the field — community clinics, mobile outreach, low-resource settings.",
    },
    {
      number: "03",
      title: "Affordable Scale",
      description:
        "A cost structure built so screening can reach the populations that need it most.",
    },
  ];

  return (
    <section id="mission" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: photo + manifesto */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-card)] ring-1 ring-border">
              <img
                src={nursePortrait}
                alt="Clinician at a community health desk"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-brand-deep/90 via-brand-deep/40 to-transparent">
                <p className="text-sm text-white/90 italic font-display">
                  "Geography should never decide who gets early care."
                </p>
              </div>
            </div>
          </div>

          {/* Right: values */}
          <div className="lg:col-span-7">
            <span className="eyebrow mb-5">Our Mission</span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mt-4 mb-6 leading-[1.1]">
              Democratizing oral cancer detection with clinical-grade AI.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We build for the clinics that have been overlooked. Our platform
              meets healthcare workers where they already are — and turns a
              smartphone into a screening tool capable of catching disease at
              its most treatable stage.
            </p>

            <div className="space-y-6">
              {values.map((value) => (
                <div
                  key={value.number}
                  className="grid grid-cols-[auto_1fr] gap-5 pb-6 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="font-display text-2xl text-primary font-medium pt-0.5">
                    {value.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1.5">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
