import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Handshake, CheckCircle, Building2, Globe, Heart, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mitLogo from "@/assets/mit-logo.png";
import harvardLogo from "@/assets/harvard-logo.png";
import googleLogo from "@/assets/google-logo.png";
import { toast } from "sonner";
import { z } from "zod";

const partnerSchema = z.object({
  orgName: z.string().trim().min(1, "Organization name is required").max(200),
  contactName: z.string().trim().min(1, "Contact name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  orgType: z.string().trim().min(1, "Please select an organization type"),
  message: z.string().trim().min(1, "Please describe how you'd like to partner").max(2000),
});

const currentPartners = [
  {
    name: "Community Health Centers",
    icon: Building2,
    description: "Local clinics providing frontline oral health screenings in underserved areas.",
    type: "Healthcare",
  },
  {
    name: "University Research Labs",
    icon: GraduationCap,
    description: "Academic institutions advancing AI model accuracy through collaborative research.",
    type: "Research",
  },
  {
    name: "Global Health NGOs",
    icon: Globe,
    description: "International organizations helping us expand screening access worldwide.",
    type: "Nonprofit",
  },
  {
    name: "Dental Associations",
    icon: Heart,
    description: "Professional dental bodies supporting training and clinical validation efforts.",
    type: "Professional",
  },
];

const PartnershipsPage = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    orgName: "",
    contactName: "",
    email: "",
    orgType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      partnerSchema.parse(formData);
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast.error(err.errors[0].message);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xykblvko", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "Partnership Inquiry",
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        toast.error("Something went wrong. Please try again or email us directly at amir@konpopdetection.com.");
      }
    } catch {
      toast.error("Something went wrong. Please try again or email us directly at amir@konpopdetection.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-primary/5 flex items-center justify-center px-4">
        <Card className="max-w-lg w-full border-2 border-primary/20">
          <CardContent className="pt-10 pb-10 text-center">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-foreground">Thank You!</h2>
            <p className="text-muted-foreground mb-8">
              We've received your partnership inquiry. Our team will review your submission and get back to you soon.
            </p>
            <Button variant="outline" onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary mb-4">
              <Handshake className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Partnerships</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in the power of collaboration. Together with our partners, we're making oral cancer screening accessible to communities that need it most.
            </p>
          </div>

          {/* Current Partners */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">Our Partners</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {currentPartners.map((partner, index) => {
                const Icon = partner.icon;
                return (
                  <Card key={index} className="border-border bg-card hover:shadow-[var(--shadow-soft)] transition-shadow">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs font-medium text-accent uppercase tracking-wider">{partner.type}</span>
                          <h3 className="font-semibold text-card-foreground mt-1 mb-2">{partner.name}</h3>
                          <p className="text-sm text-muted-foreground">{partner.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Recognition Section */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">Recognized By</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
              Our work in AI-powered oral cancer detection has been recognized by leading institutions worldwide.
            </p>
            <div className="grid grid-cols-3 gap-8 items-center max-w-2xl mx-auto">
              {[
                { src: mitLogo, alt: "MIT", name: "MIT" },
                //{ src: harvardLogo, alt: "Harvard University", name: "Harvard" },
                { src: googleLogo, alt: "Google", name: "Google" },
              ].map((org) => (
                <div key={org.name} className="flex flex-col items-center gap-1.5">
                  <div className="h-28 flex items-center justify-center">
                    <img
                      src={org.src}
                      alt={org.alt}
                      loading="lazy"
                      className="max-h-28 max-w-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{org.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Inquiry Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Become a Partner</h2>
              <p className="text-muted-foreground">
                Interested in working with us? Fill out the form below and our team will be in touch.
              </p>
            </div>

            <Card className="border-border">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="orgName">Organization Name *</Label>
                      <Input
                        id="orgName"
                        name="orgName"
                        value={formData.orgName}
                        onChange={handleChange}
                        placeholder="Your organization"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@org.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="orgType">Organization Type *</Label>
                      <select
                        id="orgType"
                        name="orgType"
                        value={formData.orgType}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select type</option>
                        <option value="Healthcare Provider">Healthcare Provider</option>
                        <option value="Research Institution">Research Institution</option>
                        <option value="Nonprofit / NGO">Nonprofit / NGO</option>
                        <option value="Government Agency">Government Agency</option>
                        <option value="Corporate / Sponsor">Corporate / Sponsor</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">How would you like to partner with us? *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your organization and how you envision collaborating..."
                      rows={5}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full text-lg" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Partnership Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsPage;
