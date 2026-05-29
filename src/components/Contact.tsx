import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { Mail, MapPin } from "lucide-react";
import hospitalTeam from "@/assets/field/hospital-team.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) toast.error(error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xykblvko", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Thanks for reaching out! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please email us at amir@konpopdetection.com.");
      }
    } catch {
      toast.error("Something went wrong. Please email us at amir@konpopdetection.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: context + photo */}
          <div className="lg:col-span-5">
            <span className="eyebrow">Contact</span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mt-4 mb-5 leading-[1.1]">
              Let's bring screening to your community.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're a clinician, partner organization, or investor —
              we'd love to talk.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Email</div>
                  <a
                    href="mailto:amir@konpopdetection.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    amir@konpopdetection.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Active deployments</div>
                  <div className="text-muted-foreground">Hua Taphan Hospital, Thailand</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden ring-1 ring-border shadow-[var(--shadow-card)] aspect-[4/3]">
              <img
                src={hospitalTeam}
                alt="The Kon Pop Detection team and partners"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-surface rounded-2xl p-8 md:p-10 ring-1 ring-border shadow-[var(--shadow-card)] space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  maxLength={100}
                  required
                  disabled={isSubmitting}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  maxLength={255}
                  required
                  disabled={isSubmitting}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us how you'd like to help or what questions you have..."
                  className="min-h-[160px]"
                  maxLength={1000}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
