import staffAssembly from "@/assets/field/staff-assembly.jpg";

const stats = [
  { number: "450K+", label: "New oral cancer cases annually worldwide" },
  { number: "66%", label: "5-year survival rate when caught early" },
  { number: "30%", label: "Lower screening rates in underserved areas" },
  { number: "<60s", label: "Average time from image to triage report" },
];

const Impact = () => {
  return (
    <section id="impact" className="relative py-24 md:py-32 overflow-hidden bg-brand-deep text-brand-deep-foreground">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={staffAssembly}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep via-brand-deep/95 to-brand-deep" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
            The impact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mt-4 mb-5 leading-[1.1]">
            Numbers behind the mission.
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Early detection radically changes outcomes. We're closing the gap
            between who gets screened and who doesn't.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 max-w-6xl">
          {stats.map((stat, i) => (
            <div key={i} className="bg-brand-deep p-8 md:p-10">
              <div className="font-display text-5xl md:text-6xl font-medium text-white mb-3">
                {stat.number}
              </div>
              <div className="w-8 h-px bg-primary-light mb-4" />
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="font-display italic text-xl md:text-2xl text-white/80 max-w-3xl mt-16 leading-relaxed">
          "Oral cancer is highly treatable when caught early. Our mission is to
          ensure that geography and economic status are never barriers to early
          detection."
        </p>
      </div>
    </section>
  );
};

export default Impact;
