import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter */}
      <div className="container py-16 border-b border-background/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Join the Earth Goods Family
          </h2>
          <p className="text-background/60 mb-8">
            Get 10% off your first order, plus exclusive recipes and wellness tips.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="rounded-full bg-background/10 border-background/20 text-background placeholder:text-background/40 focus-visible:ring-accent"
            />
            <Button
              type="submit"
              className="rounded-full bg-accent text-accent-foreground hover:bg-earth-terracotta-light px-6 shrink-0"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-display text-xl mb-4">
            Earth<span className="text-earth-terracotta-light">Goods</span>
          </h3>
          <p className="text-sm text-background/50 leading-relaxed">
            Premium organic foods for a healthier you and a greener planet.
          </p>
        </div>

        {[
          {
            title: "Shop",
            links: ["All Products", "Breakfast", "Grains", "Oils", "Seeds"],
          },
          {
            title: "Company",
            links: ["Our Story", "Recipes", "News", "Contact"],
          },
          {
            title: "Support",
            links: ["FAQ", "Shipping", "Returns", "Track Order"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-medium text-sm tracking-wide uppercase mb-4 text-background/70">
              {col.title}
            </h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-background/50 hover:text-background transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="container py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-background/40">
          © 2025 Earth Goods. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-background/40 hover:text-background transition-colors" aria-label="Instagram">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="text-background/40 hover:text-background transition-colors" aria-label="Facebook">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="text-background/40 hover:text-background transition-colors" aria-label="Twitter">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
