import harvardLogo from "@/assets/harvard-logo.png";
import mitLogo from "@/assets/mit-logo.png";
import googleLogo from "@/assets/google-logo.png";

const Partners = () => {
  return (
    <section className="py-16 md:py-20 bg-surface-muted border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Recognized by</p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
            <img
              src={harvardLogo}
              alt="Harvard University"
              className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src={mitLogo}
              alt="MIT"
              className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src={googleLogo}
              alt="Google"
              className="h-11 md:h-14 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
