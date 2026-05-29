import nursePortrait from "@/assets/field/nurse-portrait.jpg";

const Testimonial = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-deep text-brand-deep-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5">
            <div className="aspect-square max-w-sm rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <img
                src={nursePortrait}
                alt="Healthcare worker"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
              From the field
            </span>
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mt-5 mb-8 text-white">
              "Before this, screening was a referral to a city hours away.
              Now we can give patients an answer the same morning they walk in."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-px bg-primary-light" />
              <div>
                <div className="font-semibold text-white">Community Health Nurse</div>
                <div className="text-sm text-white/60">
                  Hua Taphan Hospital, Thailand
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
