import { MapPin } from "lucide-react";
import outreach from "@/assets/field/outreach-overview.jpg";
import bpScreening from "@/assets/field/bp-screening.jpg";
import intake2 from "@/assets/field/clinic-intake-2.jpg";
import doctorPatient from "@/assets/field/doctor-patient.jpg";
import community from "@/assets/field/community-waiting.jpg";

const gallery = [
  { src: bpScreening, caption: "Vitals and intake during community outreach." },
  { src: intake2, caption: "Nurse-led screening at a rural health post." },
  { src: doctorPatient, caption: "Physician consultation following triage." },
  { src: community, caption: "Patients waiting to be seen at a mobile clinic." },
];

const InAction = () => {
  return (
    <section id="in-action" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="eyebrow">In the field</span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mt-4 mb-4 leading-[1.1]">
              Already in use where it matters most.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Deployed alongside frontline clinicians serving rural and underserved communities.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Hua Taphan Hospital · Thailand</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured */}
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-[var(--shadow-card)] ring-1 ring-border mb-6 group">
            <img
              src={outreach}
              alt="Community outreach screening event"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-brand-deep/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white/80 text-sm uppercase tracking-[0.2em] mb-2">Community Deployment</p>
              <p className="font-display text-2xl md:text-3xl text-white max-w-2xl">
                Bringing screening tents directly to the communities we serve.
              </p>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gallery.map((item, i) => (
              <figure
                key={i}
                className="group rounded-xl overflow-hidden ring-1 ring-border bg-surface shadow-[var(--shadow-card)]"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 text-sm text-muted-foreground leading-snug">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InAction;
