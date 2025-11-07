import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Atenas
              </h3>
              <p className="text-muted-foreground mb-4">
                AI-powered oral cancer screening for underserved communities.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-accent fill-current" />
                <span>for a healthier world</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Our Mission
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Our Impact
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Donate
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Get in Touch</h4>
              <p className="text-muted-foreground mb-4">
                Interested in partnering with us or learning more about our work?
              </p>
              <button 
                onClick={() => alert('Contact form would be implemented here')}
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Contact Us →
              </button>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Atenas. All rights reserved. • Empowering communities through accessible healthcare technology.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
