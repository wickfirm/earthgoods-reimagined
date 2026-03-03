import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Organic food ingredients beautifully arranged"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            100% Organic · Mindfully Sourced
          </span>
          <h1 className="text-5xl md:text-7xl font-display leading-[1.1] text-foreground mb-6">
            Nourish Your
            <br />
            <span className="text-earth-forest italic">Body & Earth</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
            Premium organic foods sourced from the finest farms. Every product is a step towards
            a healthier you and a greener planet.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-earth-forest-light rounded-full px-8 gap-2 font-medium">
              Shop All Products
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-foreground/20 text-foreground hover:bg-foreground/5 font-medium">
              Our Story
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
