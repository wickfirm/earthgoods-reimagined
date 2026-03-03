import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Shop", href: "#categories" },
  { label: "Recipes", href: "#" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      {/* Announcement bar */}
      <div className="bg-primary py-2 text-center">
        <p className="text-sm font-medium tracking-wide text-primary-foreground">
          FREE DELIVERY ON ORDERS OF 100 AED &mdash; 100% ORGANIC &mdash; SHOP MINDFULLY
        </p>
      </div>

      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="font-display text-2xl tracking-tight text-foreground">
          Earth<span className="text-earth-forest">Goods</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Account">
            <User className="w-5 h-5" />
          </button>
          <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border bg-background px-6 py-4"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-base font-medium text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
