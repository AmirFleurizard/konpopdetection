import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Mission", id: "mission", href: "" },
  { label: "How It Works", id: "how-it-works", href: "" },
  { label: "Impact", id: "impact", href: "" },
  { label: "Careers", id: "careers", href: "" },
  { label: "Partnerships", id: "partnerships", href: "/partnerships" },
  { label: "Contact", id: "contact", href: "" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-[var(--shadow-soft)] border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
          >
            <img src={logo} alt="Kon Pop Detection logo" className="h-8 w-8" />
            Kon Pop Detection
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className="px-3 py-3 text-sm font-medium text-muted-foreground hover:text-primary rounded-md hover:bg-primary/5 transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
