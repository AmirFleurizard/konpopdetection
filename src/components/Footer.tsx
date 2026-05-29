import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cols = [
    {
      title: "Product",
      links: [
        { label: "How It Works", action: () => scrollTo("how-it-works") },
        { label: "In the Field", action: () => scrollTo("in-action") },
        { label: "Impact", action: () => scrollTo("impact") },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Our Mission", action: () => scrollTo("mission") },
        { label: "Partnerships", action: () => navigate("/partnerships") },
        { label: "Careers", action: () => navigate("/careers") },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Request a Demo", action: () => scrollTo("contact") },
        { label: "amir@konpopdetection.com", action: () => (window.location.href = "mailto:amir@konpopdetection.com") },
      ],
    },
  ];

  return (
    <footer className="bg-brand-deep text-brand-deep-foreground border-t border-white/10">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2.5 mb-4">
                <img src={logo} alt="Kon Pop Detection" className="h-8 w-8" />
                <span className="text-base font-semibold tracking-tight text-white">
                  Kon Pop Detection
                </span>
              </div>
              <p className="text-white/60 max-w-sm leading-relaxed">
                AI-powered oral cancer screening for the communities healthcare
                has historically passed over.
              </p>
            </div>

            {cols.map((col) => (
              <div key={col.title} className="md:col-span-2">
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={link.action}
                        className="text-white/80 hover:text-white transition-colors text-sm text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-sm text-white/50">
            <p>© {new Date().getFullYear()} Kon Pop Detection. All rights reserved.</p>
            <p>Empowering communities through accessible healthcare technology.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
