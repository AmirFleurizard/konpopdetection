import appInUse1 from "@/assets/app-in-use-1.png";
import appInUse2 from "@/assets/app-in-use-2.png";

const InAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            See It In Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Our technology is already being used by healthcare professionals in the field, 
            bringing AI-powered screening to communities that need it most.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Clinical photo */}
          <div className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <img
              src={appInUse1}
              alt="Healthcare professional using Kon Pop Detection app during oral screening"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-lg font-semibold text-foreground">
                Real-Time Screening
              </p>
              <p className="text-sm text-muted-foreground">
                A clinician captures an oral image for instant AI analysis at the point of care.
              </p>
            </div>
          </div>

          {/* App screenshot */}
          <div className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center min-h-[400px]">
              <img
                src={appInUse2}
                alt="Kon Pop Detection app showing AI analysis results with detected regions"
                className="w-auto h-[360px] object-contain rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent">
              <p className="text-lg font-semibold text-foreground">
                Instant AI Analysis
              </p>
              <p className="text-sm text-muted-foreground">
                Results delivered in seconds with detected regions, confidence scores, and next steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InAction;
