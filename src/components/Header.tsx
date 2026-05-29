import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Mission", id: "mission", href: "" },
  { label: "How It Works", id: "how-it-works", href: "" },
  { label: "In the Field", id: "in-action", href: "" },
  { label: "Impact", id: "impact", href: "" },
  { label: "Partnerships", id: "partnerships", href: "/partnerships" },
  { label: "Careers", id: "careers", href: "" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (link: typeof navLinks[number]) => {
    setMobileOpen(false);
    if (link.href) {
      navigate(link.href);
    } else if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-border shadow-[var(--shadow-soft)]"
          : "bg-background/60 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5"
          >
            <img src={logo} alt="Kon Pop Detection logo" className="h-8 w-8" />
            <span className="text-base font-semibold tracking-tight text-foreground">
              Kon Pop Detection
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Button variant="default" size="sm" onClick={scrollToContact}>
              Request a Demo
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className="px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <Button variant="default" size="sm" onClick={scrollToContact} className="mt-2">
              Request a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
